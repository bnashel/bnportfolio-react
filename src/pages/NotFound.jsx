import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Page not found</h1>
      <p>That page doesn&apos;t exist (or moved).</p>
      <p><Link to="/">Back to the homepage</Link></p>
    </div>
  );
}
