import PropTypes from "prop-types";
import './styles/bottomSection.css'

const BottomSection = ({children})=>{
    return(
        <div className="bottom-section">
            {children}
        </div>
    );
};

BottomSection.propTypes = {
    children: PropTypes.node, // Validate that 'children' is a React node
};

export default BottomSection