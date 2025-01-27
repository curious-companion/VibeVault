import { useState } from 'react';
import '../styles.css';
import './styles/playBar.css';

const ProgressContainer = ()=>{
    const [progress, setProgress] = useState(0);
    
    const handleProgressChange = (e) =>{
        setProgress(e.target.value);
    }
    return(
        <div className="progress-container">
            <div className="time-labels">
                <span id="current-time">00:00</span>
                <span id="total-time">00:00</span>
            </div>
            <input type="range" id="progress-bar" value={progress} min="0" max="100" onChange={handleProgressChange} />
        </div>
    );
};
export default ProgressContainer