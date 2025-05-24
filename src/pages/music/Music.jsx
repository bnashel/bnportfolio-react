import { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Music({ tracks }) {
  const [currentIdx, setCurrentIdx] = useState(null);
  const audioRef = useRef(null);
  const location = useLocation();

  // Play the selected track and show controls
  const handleTrackClick = (idx) => {
    setCurrentIdx(idx);
  };

  // Fade out on navigation away
  useEffect(() => {
    return () => {
      if (audioRef.current && !audioRef.current.paused) {
        let fade = setInterval(() => {
          if (audioRef.current.volume > 0.02) {
            audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.02);
          } else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.volume = 1;
            clearInterval(fade);
          }
        }, 20);
      }
    };
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <div className="content fade-in page-content-top">
      <div className="section-title page-top">A Selection of Ambient Music I've Composed in My Free Time:</div>
      <div className="tracklist">
        {tracks.map((track, idx) => {
          const [soundLine, instrLine] = track.desc.split('\n');
          return (
            <div className="track-card" key={track.title}>
              <div className="track-title-col">
                <span
                  className="track-link"
                  style={{ textDecoration: 'underline', cursor: 'pointer', color: '#222', marginBottom: 8 }}
                  onClick={() => handleTrackClick(idx)}
                >
                  {track.title}
                </span>
                {currentIdx === idx && (
                  <audio
                    ref={audioRef}
                    src={track.src}
                    controls
                    autoPlay
                    style={{ display: 'block', margin: '10px 0 0 0', width: '100%', maxWidth: 400 }}
                    onEnded={() => setCurrentIdx(null)}
                  />
                )}
              </div>
              <div className="track-details">
                <div className="track-instr"><strong><em>Instrumentation:</em></strong> {instrLine.replace('Instrumentation: ', '')}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 