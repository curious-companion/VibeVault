import '../styles.css';
import './styles/BottomSectionRight.css';
import Header from "./header";
import PlayListPage from "./playlistPage";
import PlayBar from "./playBar";


const BottomSectionRight = ()=>{
    return(
        <div className="right roboto-bold font-color">
            <Header />
            <PlayListPage />
            <PlayBar />
        </div>
    )
}
export default BottomSectionRight