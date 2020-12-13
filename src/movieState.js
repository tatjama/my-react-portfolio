//Import Images
import bta1 from "./img/suitcases.png";
import bta2 from "./img/enjoy.png";
import eticket1 from './img/e-ticket1.png';
import eticket2 from './img/e-ticket2.png';
import player1 from './img/music-player.jpg';
import player2 from './img/player.png';
import rock1 from './img/desktop-rules-modal-bonus.jpg';
import rock2 from './img/desktop-step-1-bonus.jpg';
import fullfun1 from './img/fullfun1.png';
import fullfun2 from './img/ff_background_srednji.png';
//import BtaSection from './components/BtaSection;'



export const MovieState = () => {
  return [
    {
      title: "Business Travel Agency",
      mainImg: bta1,
      secondaryImg: bta2,
      url: "/work/bta",
      awards: [
        {
          title: "Life in different countries ",
          description:`
            Business travel agency (bta) is application that allow users to see information, give feedback 
            and see other users comments about accommodation, transport, local culture, food etc. in some city.`,
        },
        {
          title: "Technics:",
          description:
            "React.js, JavaScript, Ajax, JSON, CSS, JSX, session storage, local storage, responsive design",
        },
        {
          title: "Authorization:",
          description:
            "You can use default user or admin credentials for demo purpose USER: email: user@user.com, password: UserUser1,    ADMIN: email: admin@admin.com, password: AdminAdmin1",
        },        
      ],
      content: 
        {
          title: "About:",
          section: "bta"
         
        },
      
    },
    {
      title: "E-ticket",
      mainImg: eticket1,
      url: "/work/e-ticket",
      secondaryImg: eticket2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            `E-ticket is bilingual(English/Serbian) CRUD application that allow users to see, create and update information about 
            performances, and to buy or to sell tickets for theatre.`,
        },
        {
          title: "Technics:",
          description:
            "JavaScript, HTML, CSS, Sass, jQuery, responsive design, session storage and local storage",
        },
        {
          title: "Authorization",
          description:
            "You can use default user or admin credentials for demo purpose USER: email: user@user.com, password: UserUser1,    ADMIN: email: admin@admin.com, password: AdminAdmin1",
        },
      ],
      content: 
        {
          title: "About:",
          section:
          "eticket"
        },
    },
    {
      title: "Music player",
      mainImg: player1,
      url: "/work/music-player",
      secondaryImg: player2,
      awards: [
        {
          title: "Play it again, Sam!",
          description:
            "Play it again, Sem! is music player App",
        },
        {
          title: "Technics",
          description:
            "React.js, JSX , Sass, responsive design",
        },
        {
          title: "Authorization",
          description:
            "No authorization",
        }],
        content:{
          title: "About:",
          section: "player"
        }
      ,
    },
    {
      title: "Full Fun",
      mainImg: fullfun2,
      url: "/work/full-fun",
      secondaryImg: fullfun1,
      awards: [
        {
          title: "Let's be full of fun!",
          description:
            "Full Fun is a presentation website for extended day care for elementary school students",
        },
        {
          title: "Technics:",
          description:
            "JavaScript, HTML, CSS, SEO, Web hosting, responsive design",
        },
        {
          title: "Authorization:",
          description:
            "No authorization",
        },
      ],
      content: {
        title: "About",
        section: "fullfun"
      }
    },
    {
      title: "Rock-Paper-Scissors",
      mainImg: rock2,
      url: "/work/rock-paper-scissors",
      secondaryImg: rock1,
      awards: [
        {
          title: "Game",
          description:
            "Play game against a computer. If the player wins, they gain 1 point. If the computer wins, the player loses one point",
        },
        {
          title: "Technics",
          description:
            "JavaScript, HTML, CSS, Session for keep score, responsive design.",
        },
        {
          title: "Authorization:",
          description:
            "No authorization.",
        },
      ],
      content:{
        title:"About",
        section: `Rock-paper-scissorsis advanced challenge game by Frontend Mentor.
             Challenge is to build out this Rock, Paper, Scissors game and get it looking as close to the 
             design as possible. We can use any tools we like to help us complete the challenge.Avatar - Users should be able to:                           
                 <ul>  
                                                  
                     <li>View the optimal layout for the game depending on their device's screen size,</li>
                     <li>Play Rock, Paper, Scissors against the computer,</li>
                     <li>Maintain the state of the score after refreshing the browser (optional),</li>                                    
                     <li>Bonus: Play Rock, Paper, Scissors, Lizard, Spock against the computer (optional)</li>
                 </ul>  
         <h3>Rules:</h3>
         <p>If the player wins, they gain 1 point. If the computer wins, the player loses one point.</p>
          <ul>
              <li>
                 Original
                 <ul>
                     <li>Paper beats Rock</li>
                     <li>Rock beats Scissors</li>
                     <li>Scissors beats Paper</li>
                 </ul>
              </li>
              <li>
                  Bonus
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
     
         <h3>Descriptions - Challenge:</h3>
         <ol>
             <li>Layout
                 <ul>The designs were created to the following widths:
                     <li>
                         Mobile: 375px
                     </li>
                     <li> Desktop: 1366px
                     </li>
                 </ul>                                
             </li>
     
             <li>Colors, fonts etc get from the Frontend Mentor style file                                
             </li>
             <li>Design
                 <br/>
                 Task is to build out the project to the given designs.
                 We can either choose the original designs for the simpler version or the bonus designs for the harder
                  version, both mobile and desktop . 
                 <br/>
                 The designs are in JPG static format. This will mean that we need to use our best judgment for styles
                  such as font-size, padding and margin. This should show how train is our eye to perceive differences in 
                  spacings and sizes. 
             
        `
      }
    },
  ];
};
