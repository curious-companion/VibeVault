import { useState } from "react";
import '../styles.css'
import './styles/bottomSectionLeft.css';
import Close from "../assets/icons/close";
import SongList from "../components/song-list";

const BottomSectionLeft = ()=>{
    const[isDropdownVisible,setDropdownVisible] = useState(false);

    const toggleDropdown = () =>{
        setDropdownVisible(!isDropdownVisible);
    };

    return(
            <div className="left roboto-bold">
                <Close/>                
                <div className="playlist font-color" onClick={toggleDropdown}>
                    <img src="playlist.svg" alt="playlist" />
                    <h2>Your Library</h2>
                    <img 
                    src="downarrow.svg" 
                    alt="arrow" 
                    className={`arrow ${isDropdownVisible ? 'rotate' : ''}`}/>
                </div>

                <SongList/>
                {isDropdownVisible && <div className="playlist-dropdown"></div>}
            </div>
    );
};
export default BottomSectionLeft