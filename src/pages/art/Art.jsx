import deathofsocrates from '../../assets/art/deathofsocrates.jpg';
import triumphofdeath from '../../assets/art/triumphofdeath.jpg';
import fallofrebelangels from '../../assets/art/fallofrebelangels.jpg';
import disintegrationofpersistence from '../../assets/art/disintegrationofpersistence.jpg';
import creationofbirds from '../../assets/art/creationofbirds.jpg';
import melancholyandmystery from '../../assets/art/melancholyandmystery.jpg';
import OptimizedImage from '../../components/OptimizedImage';

export default function Art() {
  return (
    <div className="page-content-top">
      <div className="art-image-container">
        <OptimizedImage
          src={deathofsocrates}
          alt="The Death of Socrates"
          className="artwork-placeholder"
          width={1400}
          height={919}
        />
      </div>
      <div className="centered">The Death of Socrates (Jacques-Louis David, 1787)</div>

      <div className="art-image-container">
        <OptimizedImage
          src={triumphofdeath}
          alt="The Triumph of Death"
          className="artwork-placeholder"
          width={1400}
          height={999}
        />
      </div>
      <div className="centered">The Triumph of Death (Pieter Bruegel the Elder, 1562)</div>

      <div className="art-image-container">
        <OptimizedImage
          src={fallofrebelangels}
          alt="The Fall of the Rebel Angels"
          className="artwork-placeholder"
          width={1360}
          height={982}
        />
      </div>
      <div className="centered">The Fall of the Rebel Angels (Pieter Bruegel the Elder, 1562)</div>

      <div className="art-image-container">
        <OptimizedImage
          src={disintegrationofpersistence}
          alt="The Disintegration of the Persistence of Memory"
          className="artwork-placeholder"
          width={1400}
          height={1079}
        />
      </div>
      <div className="centered">The Disintegration of the Persistence of Memory (Salvador Dalí, 1954)</div>

      <div className="art-image-container">
        <OptimizedImage
          src={creationofbirds}
          alt="The Creation of the Birds"
          className="artwork-placeholder"
          width={1350}
          height={1126}
        />
      </div>
      <div className="centered">The Creation of the Birds (Remedios Varo, 1957)</div>

      <div className="art-image-container">
        <OptimizedImage
          src={melancholyandmystery}
          alt="Melancholy and Mystery of a Street"
          className="artwork-placeholder"
          width={914}
          height={1140}
        />
      </div>
      <div className="centered">Melancholy and Mystery of a Street (Giorgio de Chirico, 1914)</div>
    </div>
  );
}