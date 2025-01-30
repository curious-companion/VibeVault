import PropTypes from 'prop-types';
import '../styles.css';
import './styles/songInfo.css';
const SongInfo = ({song})=>{
    console.log("Current Song in PlayBar:", song);
    if(!song || !song.name){
        return null;
    }
    return(
        <div className="song-info">
            <h3 className='song-name'>{song.name.replace(/.mp3/, "").replace(/-/g, "by")} </h3>
        </div>
    );
};

SongInfo.propTypes = {
    song: PropTypes.shape({
        name:PropTypes.string,
        url:PropTypes.string,
    }),
};

export default SongInfo;