import SongInfo from "./songInfo";
import SongButton from "./songButton";
import ProgressContainer from "./progressContainer";
import '../styles.css';
import './styles/playBar.css';



const PlayBar = ()=>{
    return(
        <div className="playbar">
            <SongInfo />
            <SongButton />
            <ProgressContainer />
        </div>

    );
};
export default PlayBar