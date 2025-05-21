import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Art from './pages/art/Art';
import Music from './pages/music/Music';
import MoviesBooks from './pages/movies-books/MoviesBooks';
import './styles.css';

export default function App() {
  return (
    <Router>
      <div className="fixed-header">
        <Link to="/">home</Link>
        <Link to="/about">about me</Link>
        <Link to="/movies-books">movies & books</Link>
        <Link to="/art">art</Link>
        <Link to="/music">music</Link>
      </div>
      <div className="content fade-in">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/art" element={<Art />} />
          <Route path="/music" element={<Music />} />
          <Route path="/movies-books" element={<MoviesBooks />} />
        </Routes>
      </div>
    </Router>
  );
} 