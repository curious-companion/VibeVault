import { useState } from "react";
import '../styles.css'
import './styles/bottomSectionLeft.css';
import Close from "../assets/icons/close";
import SongList from "../components/song-list";
import playlist from '../assets/SVGs/playlist.svg';
import DownArrow from '../assets/SVGs/down-arrow.svg';

const BottomSectionLeft = ()=>{
    const[isDropdownVisible,setDropdownVisible] = useState(false);

    const toggleDropdown = () =>{
        setDropdownVisible(!isDropdownVisible);
    };

    return(
            <div className="left roboto-bold">
                <Close/>                
                <div className="playlist font-color" onClick={toggleDropdown}>
                    <img src= {playlist} alt="playlist" />
                    <h2>Your Library</h2>
                    <img 
                    src={DownArrow}
                    alt="arrow" 
                    className={`arrow ${isDropdownVisible ? 'rotate' : ''}`}/>
                </div>

                <SongList/>
                {isDropdownVisible && <div className="playlist-dropdown"></div>}
            </div>
    );
};
export default BottomSectionLeft