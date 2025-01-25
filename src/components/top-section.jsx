import PropTypes from "prop-types";
import '../styles.css';
import './styles/topSection.css'

const TopSection = ({children})=>{
    return(
        <div>
            {children}
        </div>
    );
};
TopSection.propTypes = {
    children: PropTypes.node, // Validate that 'children' is a React node
};
export default TopSection