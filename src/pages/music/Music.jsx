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
    <div className="content fade-in page-content-top">
      <div className="section-title page-top">A Selection of Ambient Music I've Composed in My Free Time:</div>
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
                {isCurrentTrack && (
                  <audio
                    ref={audioRef}
                    src={track.src}
                    controls
                    autoPlay
                    style={{ 
                      display: 'block', 
                      margin: '10px 0 0 0', 
                      width: '100%', 
                      maxWidth: 400,
                      opacity: isPlaying ? 1 : 0.7,
                      transition: 'opacity 0.3s ease'
                    }}
                    onEnded={stopTrack}
                  />
                )}
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
  );
} 