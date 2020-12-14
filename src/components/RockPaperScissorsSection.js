import React from 'react';
import { Link } from 'react-router-dom';

const RockPaperScissorsSection = () => {
    return (
        <div>
            <Link to='/rock' target='_blank'> 
                <button className='cta'>Go to App</button>
            </Link>
            <h5>Avatar:</h5>                        
            <p> Users should be able to:    </p>                           
            <ul>                                   
                <li>View the optimal layout for the game depending on their device's screen size,</li>
                <li>Play Rock, Paper, Scissors against the computer,</li>
                <li>Maintain the state of the score after refreshing the browser (optional),</li>                                    
                <li>Bonus: Play Rock, Paper, Scissors, Lizard, Spock against the computer (optional)</li>
            </ul>  
            <h5>Rules:</h5>
            <p>If the player wins, they gain 1 point. If the computer wins, the player loses one point.</p>
            <ul>
                <li>
                    <h6>Original</h6>
                    <ul>
                        <li>Paper beats Rock</li>
                        <li>Rock beats Scissors</li>
                        <li>Scissors beats Paper</li>
                    </ul>
                </li>
                <li>
                    <h6>Bonus</h6>
                    <ul>
                        <li>Scissors beats Paper</li>
                        <li>Paper beats Rock</li>
                        <li>Rock beats Lizard</li>
                        <li>Lizard beats Spock</li>
                        <li>Spock beats Scissors</li>
                        <li>Scissors beats Lizard</li>
                        <li>Paper beats Spock</li>
                        <li>Rock beats Scissors</li>
                        <li>Lizard beats Paper</li>
                        <li>Spock beats Rock </li>
                    </ul>
                </li>                             
            </ul>   

    <h5>Descriptions - Challenge:</h5>
    <ol>
        <li><h6>Layout</h6>
            <ul>The designs were created to the following widths:
                <li>
                    Mobile: 375px
                </li>
                <li> Desktop: 1366px
                </li>
            </ul>                                
        </li>

        <li><h6>Colors, fonts etc </h6>get from the Frontend Mentor style file                                
        </li>
        <li><h6>Design</h6>
            <p>
            Task is to build out the project to the given designs.
            We can either choose the original designs for the simpler version or the bonus designs for the harder
             version, both mobile and desktop . 
            <br/>
            The designs are in JPG static format. This will mean that we need to use our best judgment for styles
             such as font-size, padding and margin. This should show how train is our eye to perceive differences in 
             spacings and sizes. 
             </p>            
        </li>
      
    </ol>
    <h6>Thank you for reading!
    <br/>Tanja</h6>

        </div>
    )
}

export default  RockPaperScissorsSection;