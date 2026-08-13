import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';

export default function Music({ tracks }) {
  const location = useLocation();
  const { audioRef, isPlaying, currentTrack, playTrack, stopTrack } = useAudioPlayer();

  // Handle track click
  const handleTrackClick = (track) => {
    if (currentTrack?.src === track.src) {
      stopTrack();
    } else {
      playTrack(track);
    }
  };

  // Stop playback on navigation
  useEffect(() => {
    return () => {
      stopTrack();
    };
  }, [location.pathname, stopTrack]);

  return (
    <div className="page-content-top">
      <div className="section-title">A selection of ambient music I've composed in my free time:</div>
      <div className="tracklist">
        {tracks.map((track) => {
          const isCurrentTrack = currentTrack?.src === track.src;

          return (
            <div className="track-card" key={track.title}>
              <div className="track-title-col">
                <button
                  type="button"
                  className={isCurrentTrack ? 'track-link playing' : 'track-link'}
                  aria-pressed={isCurrentTrack}
                  onClick={() => handleTrackClick(track)}
                >
                  {track.title}
                </button>
              </div>
            </div>
          );
        })}

        <div className={currentTrack ? 'audio-player-container expanded' : 'audio-player-container'}>
          <audio
            ref={audioRef}
            controls
            preload="none"
            style={{
              opacity: isPlaying ? 1 : 0.7,
              transition: 'opacity 0.3s ease'
            }}
            onEnded={stopTrack}
          />
        </div>
      </div>
    </div>
  );
}
