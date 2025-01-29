import PropTypes from 'prop-types';
import '../styles.css';
import './styles/playBar.css';
import repeat from '../assets/SVGs/repeat.svg';
import prev from '../assets/SVGs/previous.svg';
import play1 from '../assets/SVGs/play1.svg';
import next from '../assets/SVGs/next.svg';
import shuffle from '../assets/SVGs/shuffle.svg';
import pause from '../assets/SVGs/pause.svg';

 const SongButton = ({
    isPlaying, 
    togglePlayPause, 
    handleNext, 
    handlePrevious, 
    handleShuffle, 
    handleRepeat
}) => {
     return(
     <div className='song-button'>
     
        <img id="repeat" src={repeat} alt="repeat" onClick = {handleRepeat} />
        <img id="previous" src={prev} alt="previous" onClick = {handlePrevious} />
        <img 
            id="play" 
            src={isPlaying ? pause:play1} 
            alt={isPlaying ? "pause":"play"}
            onClick = {togglePlayPause} />
        <img id="next" src={next} alt="next" onClick={handleNext} />
        <img id="shuffle" src={shuffle} alt="shuffle" onClick={handleShuffle} />
    </div>
    
    );
 };

 SongButton.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    togglePlayPause: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    handlePrevious: PropTypes.func.isRequired,
    handleShuffle: PropTypes.func.isRequired,
    handleRepeat: PropTypes.func.isRequired,
 };

 export default SongButton;