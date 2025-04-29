import '../styles.css';
import './styles/bottomSectionRight.css';
import Header from "./header";
import PlayListPage from "./playlistPage";
import PlayBar from "./playBar";
import PropTypes from 'prop-types';


const BottomSectionRight = ({songs, currentSong})=>{
    return(
        <div className="right roboto-bold font-color">
            <Header />
            <PlayListPage />
            <PlayBar songs={songs} currentSong={currentSong} />
        </div>
    )
}

BottomSectionRight.propTypes = {
    songs: PropTypes.array.isRequired,
    currentSong: PropTypes.object,
};

export default BottomSectionRight;
