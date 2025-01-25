import '../../components/styles/hamburger.css'
import menu from '../SVGs/menu.svg';
const HamBurger = ()=>{
    return(
        <div className="hamburger">
            <img src={menu} alt="menu"/>
        </div>
    );
};
export default HamBurger