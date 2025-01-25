import '../../components/styles/close.css';
import close from '../SVGs/close.svg';

const Close = ()=>{
    return(
        <div className="close">
            <img src={close} alt="close" />
        </div>
    );
};

export default Close