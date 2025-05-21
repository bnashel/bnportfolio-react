import deathofsocrates from '../../assets/art/deathofsocrates.png';
import triumphofdeath from '../../assets/art/triumphofdeath.png';
import fallofrebelangels from '../../assets/art/fallofrebelangels.png';
import disintegrationofpersistence from '../../assets/art/disintegrationofpersistence.png';
import creationofbirds from '../../assets/art/creationofbirds.png';
import melancholyandmystery from '../../assets/art/melancholyandmystery.png';

export default function Art() {
  return (
    <div className="content fade-in page-content-top">
      <div className="page-top-spacer">
        <img src={deathofsocrates} alt="the death of socrates" className="artwork-placeholder page-top" />
      </div>
      <div className="centered">the death of socrates (jacques-louis david, 1787)</div>
      <img src={triumphofdeath} alt="the triumph of death" className="artwork-placeholder" />
      <div className="centered">the triumph of death (pieter bruegel the elder, c. 1562)</div>
      <img src={fallofrebelangels} alt="the fall of the rebel angels" className="artwork-placeholder" />
      <div className="centered">the fall of the rebel angels (pieter bruegel the elder, 1562)</div>
      <img src={disintegrationofpersistence} alt="the disintegration of the persistence of memory" className="artwork-placeholder" />
      <div className="centered">the disintegration of the persistence of memory (salvador dalí, 1954)</div>
      <img src={creationofbirds} alt="the creation of the birds" className="artwork-placeholder" />
      <div className="centered">the creation of the birds (remedios varo, 1957)</div>
      <img src={melancholyandmystery} alt="melancholy and mystery of a street" className="artwork-placeholder" />
      <div className="centered">melancholy and mystery of a street (giorgio de chirico, 1914)</div>
    </div>
  );
} 