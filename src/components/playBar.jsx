import { useState, useRef, useEffect } from "react";
import SongInfo from "./songInfo";
import SongButton from "./songButton";
import ProgressContainer from "./progressContainer";
import '../styles.css';
import './styles/playBar.css';
import PropTypes from "prop-types";



const PlayBar = ({songs, currentSong})=>{
    const[isPlaying, setIsPlaying] = useState(false);
    const[currentIndex, setCurrentIndex]  = useState(0);
    const[isShuffleOn, setIsShuffleOn] = useState(false);
    const audioRef = useRef(null);

    //Inittializing the audio object
    useEffect(() => {
        audioRef.current = new Audio();

        return () => {
            if(audioRef.current){
                audioRef.current.pause();
                audioRef.current.src = " ";
            }
        };
    }, []);

    const playSong = (song)=>{
        if(audioRef.current.src !== song.url){
            audioRef.current.src = song.url;
            audioRef.current.play();
            setIsPlaying(true)
        }
    };

    useEffect(()=>{
        if(currentSong){
            const index = songs.findIndex(song => song.url === currentSong.url);
            if(index !== -1){
                setCurrentIndex(index);
            }
            playSong(currentSong);
        }
    },[currentSong, songs]);


    //Play or Pause
    const togglePlayPause = () =>{
        if(isPlaying){
            audioRef.current.pause();
        }else{
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    //Play next Song
    const handleNext = () =>{
        let nextIndex = isShuffleOn
            ? Math.floor(Math.random()*songs.length)
            : (currentIndex+1)%songs.length;
        setCurrentIndex(nextIndex);
        playSongAtIndex(nextIndex);
    };

    //Play Previous Song
    const handlePrevious = ()=>{
        const prevIndex = (currentIndex-1+songs.length)%songs.length;
        setCurrentIndex(prevIndex);
        playSongAtIndex(prevIndex);
    }

    //Shuffle Toggle
    const handleShuffle = () =>{
        setIsShuffleOn(!isShuffleOn);
    }

    //To handle Repeat
    const handleRepeat = () => {
        audioRef.current.loop = !audioRef.current.loop;
    };

    //To play a song at any Index
    const playSongAtIndex = (index)=>{
        if(index >= 0 && index <songs.length){
            const selectedSong = songs[index];

            if(audioRef.current){
                audioRef.current.src = selectedSong.url;
                audioRef.current.load();
                audioRef.current.play()
                    .then(() => setIsPlaying(true))
                 .catch(error => console.error("Error playing song:", error));
            }
        setCurrentIndex(index);
        }
    };

    return(
        <div className="playbar">
            <SongInfo song = {songs[currentIndex]} />
            <SongButton
                isPlaying={isPlaying}
                togglePlayPause={togglePlayPause}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                handleRepeat={handleRepeat}
                handleShuffle={handleShuffle} />
            <ProgressContainer audioRef = {audioRef} />
        </div>

    );
};

PlayBar.propTypes = {
    songs: PropTypes.array.isRequired,
    currentSong: PropTypes.object,
};

export default PlayBar;