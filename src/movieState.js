//Import Images
import bta1 from "./img/suitcases.png";
import bta2 from "./img/enjoy.png";
import eticket1 from './img/e-ticket1.png';
import eticket2 from './img/e-ticket2.png';
import icewarming1 from './img/iceWarming1.png';
import icewarming2 from './img/iceWarming2.png';
import iceWarmingSports from './img/iceWarmingSports.png';
import icewarming3 from './img/iceWarming3.png';
import player1 from './img/music-player.jpg';
import player2 from './img/player.png';
import rock1 from './img/desktop-rules-modal-bonus.jpg';
import rock2 from './img/desktop-step-1-bonus.jpg';
import trioraha2 from './img/trioraha2.png';
import trioraha3 from './img/trioraha3.png';
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
          description: "You can use default user or admin credentials for demo purpose",
          usertitle: " USER:",
          user: " email: user@user.com, pass: UserUser1,",
          admintitle: "ADMIN:",
          admin: " email: admin@admin.com, pass: AdminAdmin1",
        },        
      ],
      content: 
        {
          title: "About: ",
          section: "bta"
         
        },
      
    },
    {
      title: "Ice Warming",
      mainImg: iceWarmingSports,
      url: "/work/ice-warming",
      secondaryImg: icewarming3,
      awards: [
        {
          title: "Ice Warming",
          description:
            `Ice Warming is shop create by Vanilla ES6 Javascript. Video Landing page, Glass design `,
        },
        {
          title: "Technics:",
          description:
            "ES6 JavaScript Vanilla, HTML, CSS responsive design, session storage and local storage, Contentful headless API creator",
        },
        {
          title: "No Authorization:",         
        
        },
      ],
      content: 
        {
          title: "About: ",
          section:
          "ice-warming"
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
            `E-ticket is bilingual(English/Serbian) application that allow users to see, create and update (CRUD) information about 
            performances, and to buy or to sell tickets for theatre.`,
        },
        {
          title: "Technics:",
          description:
            "JavaScript, HTML, CSS, Sass, jQuery, responsive design, session storage and local storage",
        },
        {
          title: "Authorization:",
          description: "You can use default user or admin credentials for demo purpose",
          usertitle: " USER:",
          user: " email: user@user.com, pass: UserUser1,",
          admintitle: "ADMIN:",
          admin: " email: admin@admin.com, pass: AdminAdmin1",
        
        },
      ],
      content: 
        {
          title: "About: ",
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
          title: "Technics:",
          description:
            "React.js, JSX , Sass, responsive design",
        },
        {
          title: "Authorization:",
          description:
            "No authorization",
        }],
        content:{
          title: "About: ",
          section: "player"
        }
      ,
    },
    {
      title: "Tri Oraha",
      mainImg: trioraha2,
      url: "/work/trioraha",
      secondaryImg: trioraha3,
      awards: [
        {
          title: "In Vino Veritas!",
          description:
            "Tri Oraha is a presentation website for vinery",
        },
        {
          title: "Technics:",
          description:
            "JavaScript, HTML, CSS,  Web hosting, responsive design",
        },
        {
          title: "Languages:",
          description:
            "1.Serbian, 2. Russian, 3. English",
        },
      ],
      content: {
        title: "About: ",
        section: "trioraha"
      }
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
        title: "About: ",
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
          title: "Technics:",
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
        title:"About: ",
        section: "rock"
      }
    },
  ];
};
