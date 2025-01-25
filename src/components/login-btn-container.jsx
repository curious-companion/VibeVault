import '../styles.css';
import './styles/loginButton.css';

const ButtonContainer = ()=>{
    return(
        <div className="btn-container">
            <button className="signupbtn roboto-bold">Sign Up</button>
            <button className="loginbtn roboto-bold">Log In</button>
        </div>
    );
};
export default ButtonContainer