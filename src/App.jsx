import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import { createContext, useRef, useState, useEffect, useContext } from 'react';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Art from './pages/art/Art';
import Music from './pages/music/Music';
import MoviesBooks from './pages/movies-books/MoviesBooks';
import blueWave from './assets/music/Blue Wave.m4a';
import drumBuddy from './assets/music/Drum Buddy long H 011024.m4a';
import morningPhase from './assets/music/Morning Phase.m4a';
import goldenGod from './assets/music/The Golden God.m4a';
import inevitableCycle from './assets/music/The Inevitable Cycle.m4a';
import './styles.css';

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

export const AudioCtx = createContext();

function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(null);

  // Play a track
  const play = (src) => {
    if (audioRef.current) {
      if (audioRef.current.src !== window.location.origin + src) {
        audioRef.current.src = src;
      }
      audioRef.current.volume = 1;
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setCurrentTrack(src);
    }
  };

  // Stop immediately
  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 1;
      setCurrentTrack(null);
    }
  };

  // Hide player when audio is paused or ended
  const handleHide = () => {
    setCurrentTrack(null);
  };

  return (
    <AudioCtx.Provider value={{ audioRef, play, stop, currentTrack }}>
      {children}
    </AudioCtx.Provider>
  );
}

function AppContent() {
  const { play } = useContext(AudioCtx);

  // This function will be passed to Music.jsx
  const playTrack = (src) => {
    play(src);
  };

  return (
    <>
      <div className="fixed-header">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/movies-books">Movies & Books</Link>
        <Link to="/art">Art</Link>
        <Link to="/music">Music</Link>
      </div>
      <div className="content fade-in">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/art" element={<Art />} />
          <Route path="/music" element={<Music tracks={tracks} playTrack={playTrack} />} />
          <Route path="/movies-books" element={<MoviesBooks />} />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AudioProvider>
        <AppContent />
      </AudioProvider>
    </Router>
  );
} 