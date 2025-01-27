import { useState, useEffect } from "react";
import '../styles.css'
import './styles/bottomSectionLeft.css';
import Close from "../assets/icons/close";
import SongList from "../components/song-list";
import playlist from '../assets/SVGs/playlist.svg';
import DownArrow from '../assets/SVGs/down-arrow.svg';

const BottomSectionLeft = ()=>{
    const[isDropdownVisible,setDropdownVisible] = useState(false);
    const[songs,setSongs] = useState([]);

    //fetch the songs when the components is mounted
    useEffect(()=>{
        async function fetchSongs() {
            try{
                const response = await fetch("http://localhost:3001/songs");
                const songList = await response.json();
                console.log("Fetched Song List:", songList);
                setSongs(songList);
            } catch(error){
                console.error("Error fetching Songs", error);
            }
        }
        
        fetchSongs();
    }, []);

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

                {isDropdownVisible && <SongList songs = {songs}/>}
            </div>
    );
};
export default BottomSectionLeft