import '../styles.css';
import './styles/navTop.css';
import './styles/HomeSearch.css';

const NavTop = ()=>{
    return(
        <div className="nav-top">
                <ul>
                    <li>
                        <button className="home-button">
                            <img src="home.svg" alt="Home" />
                        </button>
                    </li>
                    <li>
                        <button className="search-button">
                            <img src="search.svg" alt="Search" />
                        </button>
                    </li>
                </ul>
            </div>
    );
};
export default NavTop;