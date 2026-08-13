import { lazy, Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation
} from 'react-router-dom';
import Home from './pages/home/Home';
import ThemeProvider from './components/ThemeProvider';
import ThemeToggle from './components/ThemeToggle';
import blueWave from './assets/music/Blue Wave.m4a';
import drumBuddy from './assets/music/Drum Buddy long H 011024.m4a';
import morningPhase from './assets/music/Morning Phase.m4a';
import goldenGod from './assets/music/The Golden God.m4a';
import inevitableCycle from './assets/music/The Inevitable Cycle.m4a';

const About = lazy(() => import('./pages/about/About'));
const Art = lazy(() => import('./pages/art/Art'));
const Music = lazy(() => import('./pages/music/Music'));
const MoviesBooks = lazy(() => import('./pages/movies-books/MoviesBooks'));
const NotFound = lazy(() => import('./pages/NotFound'));

const tracks = [
  {
    title: 'Blue Wave',
    src: blueWave,
  },
  {
    title: 'Drum Buddy',
    src: drumBuddy,
  },
  {
    title: 'Morning Phase',
    src: morningPhase,
  },
  {
    title: 'The Golden God',
    src: goldenGod,
  },
  {
    title: 'The Snapped Link',
    src: inevitableCycle,
  },
];

const routeTitles = {
  '/': 'Benjamin Nashel',
  '/about': 'About Me — Benjamin Nashel',
  '/movies-books': 'Movies & Books — Benjamin Nashel',
  '/art': 'Art — Benjamin Nashel',
  '/music': 'Music — Benjamin Nashel',
};

function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = routeTitles[pathname] || 'Page not found — Benjamin Nashel';
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <>
      <RouteEffects />
      <div className="fixed-header">
        <div className="header-spacer"></div>
        <nav className="header-nav-center" aria-label="Main">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/movies-books">Movies & Books</NavLink>
          <NavLink to="/art">Art</NavLink>
          <NavLink to="/music">Music</NavLink>
        </nav>
        <div className="header-right">
          <ThemeToggle />
        </div>
      </div>
      <main className="content fade-in">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/art" element={<Art />} />
            <Route path="/music" element={<Music tracks={tracks} />} />
            <Route path="/movies-books" element={<MoviesBooks />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
