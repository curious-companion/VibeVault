import { useState, useEffect } from 'react'
import './styles.css'
import Container from './components/container'
import TopSection from './components/top-section'
import BottomSection from './components/bottom-section'
import BottomSectionLeft from './components/bottom-section-left'
import NavTop from './components/nav-top'
import ButtonContainer from './components/login-btn-container'
import BottomSectionRight from './components/bottom-section-right'


function App() {

  const[songs,setSongs] = useState([]);
  const[currentSong, setCurrentSong] = useState(null);

  useEffect(()=>{
    async function fetchSongs(){
      try{
        const response = await fetch('http://localhost:3001/songs');
        const songList = await response.json();
        setSongs(songList);
      }catch(error){
        console.error("Error fetching Songs:",error);
      }
    }
    fetchSongs();
  }, []);

  const onSongSelect = (song)=>{
    setCurrentSong(song);
    console.log(currentSong);
  }

  return (
    <Container>
        <TopSection>
            <NavTop />
            <ButtonContainer />
        </TopSection>
        <BottomSection>
            <BottomSectionLeft songs = {songs} onSongSelect={onSongSelect} />
            <BottomSectionRight songs = {songs} currentSong = {currentSong} />
        </BottomSection>
    </Container>

  );
};

export default App;
