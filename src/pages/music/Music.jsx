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
        {tracks.map((track, idx) => (
          <div className="track" key={track.title}>
            <span
              className="track-link"
              style={{ textDecoration: 'underline', cursor: 'pointer', color: '#222', marginRight: 8 }}
              onClick={() => handleTrackClick(idx)}
            >
              {track.title}
            </span>
            : {track.desc}
            {currentIdx === idx && (
              <audio
                ref={audioRef}
                src={track.src}
                controls
                autoPlay
                style={{ display: 'block', marginTop: 8 }}
                onEnded={() => setCurrentIdx(null)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 