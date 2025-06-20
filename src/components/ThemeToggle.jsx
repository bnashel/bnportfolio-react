import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      onMouseEnter={(e) => {
        e.target.style.color = theme === 'dark' ? '#a3a3a3' : '#666';
        e.target.style.background = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
        e.target.style.transform = 'translate3d(0, -2px, 0)';
      }}
      onMouseLeave={(e) => {
        e.target.style.color = theme === 'dark' ? '#e5e5e5' : '#111';
        e.target.style.background = 'none';
        e.target.style.transform = 'translate3d(0, 0, 0)';
      }}
      style={{
        background: 'none',
        border: theme === 'dark' ? '1px solid #e5e5e5' : '1px solid #111',
        color: theme === 'dark' ? '#e5e5e5' : '#111',
        padding: '0.5rem 0.7rem 0.3rem 0.7rem',
        borderRadius: '4px',
        fontSize: 'clamp(0.95rem, 4vw, 1.15rem)',
        cursor: 'pointer',
        transition: 'color 0.2s ease, transform 0.2s ease, background 0.2s ease',
        margin: '0 0.3rem',
        textDecoration: 'none',
        fontFamily: 'inherit',
        position: 'relative',
        display: 'inline-block',
        width: 'auto',
        textAlign: 'center',
        willChange: 'transform',
        transform: 'translate3d(0, 0, 0)',
        whiteSpace: 'nowrap'
      }}
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
};

export default ThemeToggle; 