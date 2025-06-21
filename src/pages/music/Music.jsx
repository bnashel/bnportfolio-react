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
    <div className="content fade-in">
      <div className="page-content-top">
        <div className="section-title">A selection of ambient music I've composed in my free time:</div>
        <div className="tracklist">
          {tracks.map((track) => {
            const [soundLine, instrLine] = track.desc.split('\n');
            const isCurrentTrack = currentTrack?.src === track.src;
            
            return (
              <div className="track-card" key={track.title}>
                <div className="track-title-col">
                  <span
                    className="track-link"
                    style={{ 
                      textDecoration: 'underline', 
                      cursor: 'pointer', 
                      color: isCurrentTrack ? '#666' : '#222',
                      marginBottom: 8,
                      transition: 'color 0.3s ease'
                    }}
                    onClick={() => handleTrackClick(track)}
                  >
                    {track.title}
                  </span>
                  
                  {/* Always render audio container, animate with CSS */}
                  <div className={`audio-player-container ${isCurrentTrack ? 'expanded' : ''}`}>
                    {isCurrentTrack && (
                      <audio
                        ref={audioRef}
                        src={track.src}
                        controls
                        style={{ 
                          opacity: isPlaying ? 1 : 0.7,
                          transition: 'opacity 0.3s ease'
                        }}
                        onEnded={stopTrack}
                      />
                    )}
                  </div>
                </div>
                <div className="track-details">
                  <div className="track-instr">
                    <strong><em>Instrumentation:</em></strong> {instrLine.replace('Instrumentation: ', '')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 