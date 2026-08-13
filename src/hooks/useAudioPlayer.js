import { useRef, useState, useEffect, useCallback } from 'react';

const FADE_DURATION = 1000; // 1 second
const FADE_STEPS = 50; // Number of steps in fade
const FADE_INTERVAL = FADE_DURATION / FADE_STEPS;

export const useAudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const fadeIntervalRef = useRef(null);
  const playRequestRef = useRef(0);

  const clearFade = useCallback(() => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }
  }, []);

  // Fade the rendered audio element in or out
  const fadeAudio = useCallback((targetVolume, onComplete) => {
    clearFade();

    const startVolume = audioRef.current?.volume || 0;
    const volumeStep = (targetVolume - startVolume) / FADE_STEPS;
    let currentStep = 0;

    fadeIntervalRef.current = setInterval(() => {
      const audio = audioRef.current;
      if (!audio) {
        clearFade();
        return;
      }

      currentStep++;
      const newVolume = startVolume + (volumeStep * currentStep);
      audio.volume = Math.max(0, Math.min(1, newVolume));

      if (currentStep >= FADE_STEPS) {
        clearFade();
        if (onComplete) onComplete();
      }
    }, FADE_INTERVAL);
  }, [clearFade]);

  // Play a track through the rendered element with fade in
  const playTrack = useCallback((track) => {
    const audio = audioRef.current;
    if (!track || !audio) return;

    const requestId = ++playRequestRef.current;
    clearFade();
    audio.src = track.src;
    audio.load();
    audio.volume = 0;
    audio.play()
      .then(() => {
        if (playRequestRef.current === requestId) {
          fadeAudio(1);
        }
      })
      .catch(() => {
        if (playRequestRef.current === requestId) {
          clearFade();
          audio.volume = 1;
          setIsPlaying(false);
          setCurrentTrack(null);
        }
      });
    setIsPlaying(true);
    setCurrentTrack(track);
  }, [clearFade, fadeAudio]);

  // Stop playback with fade out
  const stopTrack = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    playRequestRef.current++;
    fadeAudio(0, () => {
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 1;
      setIsPlaying(false);
      setCurrentTrack(null);
    });
  }, [fadeAudio]);

  // Cleanup on unmount
  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      clearFade();
      if (audio) {
        audio.pause();
      }
    };
  }, [clearFade]);

  return {
    audioRef,
    isPlaying,
    currentTrack,
    playTrack,
    stopTrack
  };
};
