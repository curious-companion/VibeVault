import Card from "./card";
import './styles/playlist.css';
import '../styles.css';
const PlayListPage = ()=>{
    return(
        <div className="playlistPage">
            <h1>Our Playlist</h1>
            <div className="cardContainer">
                <Card />
            </div>
        </div>
    );
};
export default PlayListPage