import { useState } from "react";
import PropTypes from "prop-types";
import '../styles.css'
import './styles/bottomSectionLeft.css';
import Close from "../assets/icons/close";
import SongList from "../components/song-list";
import playlist from '../assets/SVGs/playlist.svg';
import DownArrow from '../assets/SVGs/down-arrow.svg';

const BottomSectionLeft = ({songs, onSongSelect})=>{
    const[isDropdownVisible,setDropdownVisible] = useState(false);

    
    const toggleDropdown = () =>{
        setDropdownVisible(!isDropdownVisible);
    };

    //Handling Song Click
    const handleSongClick = (song) =>{
        if(onSongSelect){
            onSongSelect(song);
        }
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

                {isDropdownVisible && 
                (<SongList songs = {songs} onSongClick={handleSongClick} />)}

            </div>
    );
};

BottomSectionLeft.propTypes = {
    songs: PropTypes.array.isRequired,
    onSongSelect: PropTypes.func.isRequired,
};


export default BottomSectionLeft;