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
          title: "About: ",
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
          title: "Authorization:",
          description:
            "You can use default user or admin credentials for demo purpose USER: email: user@user.com, password: UserUser1,    ADMIN: email: admin@admin.com, password: AdminAdmin1",
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
