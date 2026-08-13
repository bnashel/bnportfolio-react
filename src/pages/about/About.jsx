import roadImg from '../../assets/road.jpg';

export default function About() {
  return (
    <div className="page-content-top">
      <div className="art-image-container">
        <img
          className="about-photo"
          src={roadImg}
          alt="on the road"
          width={1400}
          height={933}
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.15em', marginBottom: '3rem' }}>
        Welcome to my personal anthology
      </div>
      <div className="bio">
        <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
          I'm originally from Brooklyn and currently a student at Vanderbilt University, studying Economics with minors in History and Philosophy.<br /><br />
          My academic interests center around political economy, specifically how monetary and financial institutions influence what states and people are able to do. This year I'm beginning research on economic statecraft and the history of financial coercion.<br /><br />
          Most of my work outside the classroom has been at startups. I was the fourth employee at Enttor, an AI marketing software company, where I ran business development and helped raise a pre-seed round. This past summer I worked in finance and operations at Nero, which builds infrastructure for music live streaming. Next summer I'll be at Rothschild &amp; Co in New York.<br /><br />
          Before college I went to the Packer Collegiate Institute, where I spent most of my time focused on classical piano and composing electronic music. I still do both.
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com/bnashel/" target="_blank" rel="noopener noreferrer">Instagram</a>
          &nbsp;|&nbsp;
          <a href="https://www.linkedin.com/in/bnashel" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
} 