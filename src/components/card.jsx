import '../styles.css';

const Card = ()=>{
    return(
        <div className="card">
            <div className="image-container">
                <img src="Images/ab67706f000000020408713c731caaf1f800615a.jpg" alt="chill hits" loading="lazy" className="Images" />
                <svg className="play-button" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px">
                    <circle cx="480" cy="-480" r="480" fill="#FF6F61"/>
                    <path d="m380-300 280-180-280-180v360Z" fill="black"/>
                </svg>
            </div>
            <h2>Chill Hits!</h2>
            <p>Kick back to the best new and recent songs!!!</p>
        </div>
    );
};
export default Card