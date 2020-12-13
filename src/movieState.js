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



export const MovieState = () => {
  return [
    {
      title: "Business Travel Agency",
      mainImg: bta1,
      secondaryImg: bta2,
      url: "/work/bta",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
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
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Music Player",
      mainImg: player1,
      url: "/work/music-player",
      secondaryImg: player2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Full Fun",
      mainImg: fullfun2,
      url: "/work/full-fun",
      secondaryImg: fullfun1,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Rock-Paper-Scissors",
      mainImg: rock2,
      url: "/work/rock-paper-scissors",
      secondaryImg: rock1,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
