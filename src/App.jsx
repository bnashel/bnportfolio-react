import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
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
    title: 'Blue Wave',
    desc: 'Sound: Warm, sustained, with slow attack and low-pass filtering\nInstrumentation: Arturia Prophet V, Felt Piano, Serum (analog waveforms), Omnisphere',
    src: blueWave,
  },
  {
    title: 'Drum Buddy',
    desc: 'Sound: Lo-fi, percussive, experimental with analog grit\nInstrumentation: Custom hardware drum synth (Drum Buddy), Modular V, RC-20',
    src: drumBuddy,
  },
  {
    title: 'Morning Phase',
    desc: 'Sound: Intimate, ambient, cinematic with soft dynamics\nInstrumentation: Felt Piano, Kontakt textures, B3 organ emulation, Valhalla Shimmer',
    src: morningPhase,
  },
  {
    title: 'The Golden God',
    desc: 'Sound: Distorted, analog-heavy, energetic with punch\nInstrumentation: Arturia Mini V, u-he Diva, Maschine drum rack, Serum sub bass, Stutter Edit',
    src: goldenGod,
  },
  {
    title: 'The Snapped Link',
    desc: 'Sound: Lush, pulsing, ambient with evolving layers\nInstrumentation: Arturia Prophet V, Diva bass, XO drum sampler, Output Portal, Omnisphere',
    src: inevitableCycle,
  },
];

function AppContent() {
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
          <Route path="/music" element={<Music tracks={tracks} />} />
          <Route path="/movies-books" element={<MoviesBooks />} />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
} 