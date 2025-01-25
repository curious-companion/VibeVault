import '../styles.css';

const ProgressContainer = ()=>{
    return(
        <div className="progress-container">
            <div className="time-labels">
                <span id="current-time">00:00</span>
                <span id="total-time">00:00</span>
            </div>
            <input type="range" id="progress-bar" value="0" min="0" max="100" />
        </div>
    );
};
export default ProgressContainer