import { useEffect, useRef } from 'react';
import BackgroundAnimation from '../../components/BackgroundAnimation';

export default function Home() {
  const titleRef = useRef(null);

  useEffect(() => {
    // Prevent scrolling on homepage
    document.body.classList.add('home-no-scroll');
    // Typing animation
    const text = "hi, i'm benjamin nashel";
    let index = 0;
    titleRef.current.textContent = '';
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        titleRef.current.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
      document.body.classList.remove('home-no-scroll');
    };
  }, []);

  return (
    <>
      <div className="home-title-fixed" ref={titleRef}></div>
      <BackgroundAnimation />
    </>
  );
} 