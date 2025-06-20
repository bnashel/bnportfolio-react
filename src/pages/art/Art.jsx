import deathofsocrates from '../../assets/art/deathofsocrates.png';
import triumphofdeath from '../../assets/art/triumphofdeath.png';
import fallofrebelangels from '../../assets/art/fallofrebelangels.png';
import disintegrationofpersistence from '../../assets/art/disintegrationofpersistence.png';
import creationofbirds from '../../assets/art/creationofbirds.png';
import melancholyandmystery from '../../assets/art/melancholyandmystery.png';
import OptimizedImage from '../../components/OptimizedImage';

export default function Art() {
  return (
    <div className="content fade-in page-content-top">
      <div className="page-top-spacer">
        <div className="art-image-container">
          <OptimizedImage 
            src={deathofsocrates} 
            alt="The Death of Socrates" 
            className="artwork-placeholder page-top" 
          />
        </div>
      </div>
      <div className="centered">The Death of Socrates (Jacques-Louis David, 1787)</div>
      
      <div className="art-image-container">
        <OptimizedImage 
          src={triumphofdeath} 
          alt="The Triumph of Death" 
          className="artwork-placeholder" 
        />
      </div>
      <div className="centered">The Triumph of Death (Pieter Bruegel the Elder, 1562)</div>
      
      <div className="art-image-container">
        <OptimizedImage 
          src={fallofrebelangels} 
          alt="The Fall of the Rebel Angels" 
          className="artwork-placeholder" 
        />
      </div>
      <div className="centered">The Fall of the Rebel Angels (Pieter Bruegel the Elder, 1562)</div>
      
      <div className="art-image-container">
        <OptimizedImage 
          src={disintegrationofpersistence} 
          alt="The Disintegration of the Persistence of Memory" 
          className="artwork-placeholder" 
        />
      </div>
      <div className="centered">The Disintegration of the Persistence of Memory (Salvador Dalí, 1954)</div>
      
      <div className="art-image-container">
        <OptimizedImage 
          src={creationofbirds} 
          alt="The Creation of the Birds" 
          className="artwork-placeholder" 
        />
      </div>
      <div className="centered">The Creation of the Birds (Remedios Varo, 1957)</div>
      
      <div className="art-image-container">
        <OptimizedImage 
          src={melancholyandmystery} 
          alt="Melancholy and Mystery of a Street" 
          className="artwork-placeholder" 
        />
      </div>
      <div className="centered">Melancholy and Mystery of a Street (Giorgio de Chirico, 1914)</div>
    </div>
  );
} 