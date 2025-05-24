import { useRef, useState, useEffect, useCallback } from 'react';

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const FADE_DURATION = 1000; // 1 second
const FADE_STEPS = 50; // Number of steps in fade
const FADE_INTERVAL = FADE_DURATION / FADE_STEPS;

export const useAudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const fadeIntervalRef = useRef(null);
  const cacheRef = useRef(new Map());

  // Clean up cache periodically
  useEffect(() => {
    const cleanupCache = () => {
      const now = Date.now();
      for (const [key, value] of cacheRef.current.entries()) {
        if (now - value.timestamp > CACHE_DURATION) {
          cacheRef.current.delete(key);
        }
      }
    };

    const interval = setInterval(cleanupCache, CACHE_DURATION);
    return () => clearInterval(interval);
  }, []);

  // Fade audio in or out
  const fadeAudio = useCallback((targetVolume, onComplete) => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }

    const startVolume = audioRef.current?.volume || 0;
    const volumeStep = (targetVolume - startVolume) / FADE_STEPS;
    let currentStep = 0;

    fadeIntervalRef.current = setInterval(() => {
      if (!audioRef.current) return;

      currentStep++;
      const newVolume = startVolume + (volumeStep * currentStep);
      audioRef.current.volume = Math.max(0, Math.min(1, newVolume));

      if (currentStep >= FADE_STEPS) {
        clearInterval(fadeIntervalRef.current);
        if (onComplete) onComplete();
      }
    }, FADE_INTERVAL);
  }, []);

  // Play a track with fade in
  const playTrack = useCallback((track) => {
    if (!track) return;

    // Check cache first
    const cachedAudio = cacheRef.current.get(track.src);
    if (cachedAudio) {
      audioRef.current = cachedAudio.audio;
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0;
      audioRef.current.play();
      fadeAudio(1);
      setIsPlaying(true);
      setCurrentTrack(track);
      return;
    }

    // If not cached, create new audio
    const audio = new Audio(track.src);
    audio.volume = 0;
    audioRef.current = audio;

    // Cache the audio
    cacheRef.current.set(track.src, {
      audio,
      timestamp: Date.now()
    });

    audio.play().then(() => {
      fadeAudio(1);
      setIsPlaying(true);
      setCurrentTrack(track);
    });
  }, [fadeAudio]);

  // Stop playback with fade out
  const stopTrack = useCallback(() => {
    if (!audioRef.current) return;

    fadeAudio(0, () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.volume = 1;
      }
      setIsPlaying(false);
      setCurrentTrack(null);
    });
  }, [fadeAudio]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return {
    audioRef,
    isPlaying,
    currentTrack,
    playTrack,
    stopTrack
  };
}; 