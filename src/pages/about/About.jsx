import roadImg from '../../assets/road.jpg';
import OptimizedImage from '../../components/OptimizedImage';

export default function About() {
  return (
    <div className="content fade-in">
      <div className="page-content-top">
        <div className="art-image-container">
          <img
            className="about-photo"
            src={roadImg}
            alt="on the road"
          />
        </div>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.15em', marginBottom: '3rem' }}>
          Welcome to my personal anthology
        </div>
        <div className="bio">
          <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
            I'm originally from Brooklyn and currently a student at Vanderbilt University, studying Economics and Philosophy, with a minor in History.<br /><br />
            I attended the Packer Collegiate Institute from 2020 to 2024 and spent most of high school focused on classical piano and composing electronic music. This inspired me to start a music tutoring nonprofit called InTune. We had lessons running across three continents by the time I graduated.<br /><br />
            During my freshman year at Vanderbilt, I co-founded GradPad, a marketplace helping young people navigate the New York housing market. We inverted the outdated search model by using AI to prefilter listings based on a user's true preferences.<br /><br />
            Most recently, I worked at an AI-native marketing software startup called Enttor, where we built tools that help consumer brands scale content efficiently.<br /><br />
            And right now I'm figuring out what I want to do next…
          </div>
          <div className="social-links">
            <a href="https://www.instagram.com/bnashel/" target="_blank" rel="noopener noreferrer">Instagram</a>
            &nbsp;|&nbsp;
            <a href="https://www.linkedin.com/in/benjamin-nashel-06770a333/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
} 