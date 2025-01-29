import PropTypes from 'prop-types';
import '../styles.css';
import './styles/songList.css';

const SongList = ({songs, onSongClick})=>{
    return(
        <div className="songList font-color">
            <ul>
                {songs.map((song) =>(
                    <li key={song.name} onClick ={() => onSongClick(song)}>
                        <span>{song.name.replace(/\.mp3$/, "").replace(/%20/g, " ")}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

//Prop validation for song Prop
SongList.propTypes = {
    songs: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
    onSongClick: PropTypes.func.isRequired,
};

export default SongList