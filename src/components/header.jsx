import '../styles.css';
import './styles/header.css';
import HamBurger from "../assets/icons/hamburger";
import LeftArrow from "../assets/icons/leftarrow";
import RightArrow from "../assets/icons/rightarrow";

const Header = ()=>{
    return(
        <div className="header">
            <div className="nav">
                <HamBurger />
                <LeftArrow />
                <RightArrow />
                
            </div>

        </div>
    );
};
export default Header