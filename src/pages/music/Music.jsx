import { useRef } from 'react';
import blueWave from '../../assets/music/Blue Wave.m4a';
import drumBuddy from '../../assets/music/Drum Buddy long H 011024.m4a';
import morningPhase from '../../assets/music/Morning Phase.m4a';
import goldenGod from '../../assets/music/The Golden God.m4a';
import inevitableCycle from '../../assets/music/The Inevitable Cycle.m4a';

const tracks = [
  {
    title: 'blue wave',
    desc: 'logic, felt piano, sync bass',
    src: blueWave,
  },
  {
    title: 'drum buddy',
    desc: 'one of a kind rhythm module',
    src: drumBuddy,
  },
  {
    title: 'morning phase',
    desc: 'freq shifting in logic, felt piano, moog',
    src: morningPhase,
  },
  {
    title: 'the golden god',
    desc: 'distorted moog, heavy bass',
    src: goldenGod,
  },
  {
    title: 'the inevitable cycle',
    desc: 'violin, trumpet, felt piano',
    src: inevitableCycle,
  },
];

export default function Music() {
  const audioRefs = useRef([]);

  const playTrack = (idx) => {
    audioRefs.current.forEach((audio, i) => {
      if (!audio) return;
      if (i === idx) {
        audio.style.display = 'block';
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
        audio.style.display = 'none';
      }
    });
  };

  return (
    <div className="content fade-in page-content-top">
      <div className="section-title page-top">a selection of ambient music i've composed in my free time:</div>
      <div className="tracklist">
        {tracks.map((track, idx) => (
          <div className="track" key={track.title}>
            <button className="track-link" onClick={() => playTrack(idx)}>{track.title}</button>: {track.desc}
            <audio
              className="audio-player"
              ref={el => audioRefs.current[idx] = el}
              src={track.src}
              controls
              preload="none"
              style={{ display: 'none' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 