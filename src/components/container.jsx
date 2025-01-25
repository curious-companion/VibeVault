import '../styles.css';
import '../components/styles/container.css'
import PropTypes from "prop-types";
const Container = ({children}) =>{
    return(
        <div className="container">
            {children}
        </div>
    );
};
Container.propTypes = {
    children: PropTypes.node, // Validate that 'children' is a React node
};
export default Container