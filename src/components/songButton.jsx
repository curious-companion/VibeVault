import PropTypes from 'prop-types';
import '../styles.css';
import './styles/playBar.css';
import repeat from '../assets/SVGs/repeat.svg';
import repeatOne from '../assets/SVGs/repeatOn.svg';
import prev from '../assets/SVGs/previous.svg';
import play1 from '../assets/SVGs/play1.svg';
import next from '../assets/SVGs/next.svg';
import shuffle from '../assets/SVGs/shuffle.svg';
import shuffleOn from '../assets/SVGs/shuffleOn.svg';
import pause from '../assets/SVGs/pause.svg';

 const SongButton = ({
    isPlaying, 
    isShuffleOn,
    isRepeatOn,
    togglePlayPause, 
    handleNext, 
    handlePrevious, 
    handleShuffle, 
    handleRepeat
}) => {
     return(
     <div className='song-button'>
     
        <img id="repeat" 
            src={isRepeatOn ? repeatOne:repeat} 
            alt={isRepeatOn ? "repeatOn":"repeat"}
            onClick = {handleRepeat} />
        <img id="previous" src={prev} alt="previous" onClick = {handlePrevious} />
        <img 
            id="play" 
            src={isPlaying ? pause:play1} 
            alt={isPlaying ? "pause":"play"}
            onClick = {togglePlayPause} />
        <img id="next" src={next} alt="next" onClick={handleNext} />
        <img id="shuffle" 
            src={isShuffleOn ? shuffleOn:shuffle} 
            alt={isShuffleOn ? "shuffleOn":"shuffle"} 
            onClick={handleShuffle} />
    </div>
    
    );
 };

 SongButton.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    isShuffleOn: PropTypes.bool.isRequired,
    isRepeatOn: PropTypes.bool.isRequired,
    togglePlayPause: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    handlePrevious: PropTypes.func.isRequired,
    handleShuffle: PropTypes.func.isRequired,
    handleRepeat: PropTypes.func.isRequired,
 };

 export default SongButton;