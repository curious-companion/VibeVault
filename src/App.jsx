import '../styles.css';
import Container from './components/container'
import TopSection from './components/top-section'
import BottomSection from './components/bottom-section'
import BottomSectionLeft from './components/bottom-section-left'
import NavTop from './components/nav-top'
import ButtonContainer from './components/login-btn-container'
import BottomSectionRight from './components/bottom-section-right'


function App() {

  return (
    <Container>
        <TopSection>
            <NavTop />
            <ButtonContainer />
        </TopSection>
        <BottomSection>
            <BottomSectionLeft />
            <BottomSectionRight />
        </BottomSection>
    </Container>

  );
};

export default App
