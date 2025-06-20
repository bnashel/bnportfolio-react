import roadImg from '../../assets/road.jpg';
import OptimizedImage from '../../components/OptimizedImage';

export default function About() {
  return (
    <div className="bio page-content-top fade-in">
      <OptimizedImage
        className="page-top"
        src={roadImg}
        alt="on the road"
        style={{
          width: '100%',
          maxWidth: 520,
          display: 'block',
          margin: '2.5rem auto 2rem auto',
          borderRadius: 18,
          objectFit: 'cover',
          boxShadow: '0 2px 16px rgba(0,0,0,0.07)'
        }}
      />
      <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.15em', marginBottom: '2rem' }}>
        Welcome to my personal anthology
      </div>
      <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
        I'm originally from Brooklyn and currently a student at Vanderbilt University, studying Economics and History.<br /><br />
        I attended the Packer Collegiate Institute from 2020 to 2024 and spent most of high school focused on classical piano and composing electronic music. This inspired me to start a music tutoring nonprofit called InTune. We had lessons running across three continents by the time I graduated.<br /><br />
        I also have a deep love for historical research—particularly the Boasian Circle and early cultural anthropology. I'm fascinated by how notions of culture travel across time and geography, and I've spent the past few years exploring those connections through archival research and academic writing.<br /><br />
        Now at Vanderbilt, I'm working at an AI-native marketing software startup called Enttor, where we build tools that help consumer brands scale content efficiently without losing their creative voice.<br /><br />
        Across music, research, and startups, I'm drawn to the same core impulse: using ideas to build something lasting and something that connects people. Whether composing a piece, tracing the evolution of cultural theory, or launching a product, I'm motivated by a curiosity about how things fit together and a desire to shape systems that help others express themselves more fully.
      </div>
      <div className="social-links">
        <a href="https://www.instagram.com/bnashel/" target="_blank" rel="noopener noreferrer">Instagram</a>
        &nbsp;|&nbsp;
        <a href="https://www.linkedin.com/in/benjamin-nashel-06770a333/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
} 