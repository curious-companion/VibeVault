import PropTypes from 'prop-types';
import '../styles.css';
import './styles/songList.css';

const SongList = ({songs})=>{
    return(
    <div className="songList font-color">
        <ul>
            {songs.map((song,index) =>(
                <li key={index}>
                    <span>{song.replace(/\.mp3$/, "").replace(/%20/g, " ")}</span>
                </li>
            ))}
        </ul>
    </div>

    );
};

//Prop validation for song Prop
SongList.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SongList