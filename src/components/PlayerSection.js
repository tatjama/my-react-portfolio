import React from 'react';
import { Link } from 'react-router-dom';

const PlayerSection = () => {
    return (
        <div>
            <Link to="/player" target="_blank">
                <button className="cta">Go to App</button>
            </Link>
            <p>
                We can play, go back, as well as skip a song. The library contains a list of all songs
            </p>
        </div>
    )
}
export default PlayerSection;