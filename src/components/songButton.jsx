import '../styles.css';
import './styles/playBar.css';
import repeat from '../assets/SVGs/repeat.svg';
import prev from '../assets/SVGs/previous.svg';
import play1 from '../assets/SVGs/play1.svg';
import next from '../assets/SVGs/next.svg';
import shuffle from '../assets/SVGs/shuffle.svg';
 const SongButton = ()=>{
     return(<div className='song-button'>
     
     <img id="repeat" src={repeat} alt="repeat" />
     <img id="previous" src={prev} alt="previous" />
     <img id="play" src={play1} alt="play" />
     <img id="next" src={next} alt="next" />
     <img id="shuffle" src={shuffle} alt="shuffle" />
    </div>
    
    );
 };
 export default SongButton