import '../styles.css';
import './styles/navTop.css';
import './styles/HomeSearch.css';
import home from '../assets/SVGs/home.svg';
import search from '../assets/SVGs/search.svg';

const NavTop = ()=>{
    return(
        <div className="nav-top">
                <ul>
                    <li>
                        <button className="home-button">
                            <img src={home} alt="Home" />
                        </button>
                    </li>
                    <li>
                        <button className="search-button">
                            <img src={search} alt="Search" />
                        </button>
                    </li>
                </ul>
            </div>
    );
};
export default NavTop;