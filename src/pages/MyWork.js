import React from 'react';
//Styled
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Images
import suitecases from '../img/suitcases.png';
import eticket1 from '../img/e-ticket1.png';
import icewarming1 from '../img/iceWarming1.png';
import player from '../img/music-player.jpg';
import trioraha from '../img/trioraha1.png';
import rock from '../img/desktop-step-1.jpg';
import fullfun from '../img/fullfun.png';
//Animations
import {motion} from 'framer-motion';
import {pageAnimation, fade, imageAnimation, lineAnimation, slider, sliderContainer } from '../animation';
import { UseScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const MyWork = () => {
    const [ element, controls ] = UseScroll();
    const [ element1, controls1 ] = UseScroll();
    const [ element2, controls2 ] = UseScroll();
    const [ element3, controls3 ] = UseScroll();
    const [ element4, controls4 ] = UseScroll();
    const [ element5, controls5 ] = UseScroll();
    return(
        <Work 
            variants = {pageAnimation} 
            initial = "hidden" 
            animate = "show" 
            exit = "exit" 
            style = {{background: "#ffffff"}}
        >
            <motion.div variants = {sliderContainer}>
                <Frame1 variants = {slider} ></Frame1>
                <Frame2 variants = {slider} ></Frame2>
                <Frame3 variants = {slider} ></Frame3>
                <Frame4 variants = {slider} ></Frame4>
            </motion.div>
            <Movie>
                <motion.h1 variants = { fade }>1. Life in different countries...</motion.h1>
                <motion.div variants = { lineAnimation } className = "line"></motion.div>
                <Link to = "/work/bta">
                    <Hide>
                        <motion.img variants = {imageAnimation} src = {suitecases} alt = "suitecases"/>
                    </Hide>
                </Link>
            </Movie>
            <Movie variants = { fade } animate = { controls } initial = "hidden" ref = {element}>
                <h1>2. Ice Warming</h1>
                <motion.div variants = {lineAnimation} className = "line"></motion.div>
                <Link to = "/work/ice-warming">
                    <img src = {icewarming1} alt = "actor"/>
                </Link>                
            </Movie>
            <Movie variants = { fade } animate = { controls1 } initial = "hidden" ref = {element1}>
                <h1>3. Truly a Masterpiece</h1>
                <motion.div variants = {lineAnimation} className = "line"></motion.div>
                <Link to = "/work/e-ticket">
                    <img src = {eticket1} alt = "actor"/>
                </Link>
            </Movie>
            <Movie variants = { fade } animate = { controls2 } initial = "hidden" ref = {element2}>
                <h1>4. Play it again, Sam!</h1>
                <motion.div variants = {lineAnimation} className = "line"></motion.div>
                <Link to = "/work/music-player">
                    <img src = {player} alt = "long-play"/>
                </Link>
            </Movie>
            
            <Movie variants = { fade } animate = {controls3} initial = "hidden" ref = { element3 }>
                <h1>5. In Vino Veritas!</h1>
                <motion.div variants = { lineAnimation }  className = "line"></motion.div>
                <Link to = "/work/trioraha">
                    <img src = {trioraha} alt = "tri oraha"/>
                </Link>
            </Movie>
            <Movie variants = { fade } animate = {controls4} initial = "hidden" ref = { element4 }>
                <h1>6. Let's be Full of Fun!</h1>
                <motion.div variants = { lineAnimation }  className = "line"></motion.div>
                <Link to = "/work/full-fun">
                    <img src = {fullfun} alt = "full-fun"/>
                </Link>
            </Movie>
            <Movie variants = { fade } animate = {controls5} initial = "hidden" ref = { element5 }>
                <h1>7. Rock-Paper-Scissors</h1>
                <motion.div variants = { lineAnimation }  className = "line"></motion.div>
                <Link to = "/work/rock-paper-scissors">
                    <img src = {rock} alt = "rock-paper-scissors"/>
                </Link>
            </Movie>
            <ScrollTop/>
        </Work>
    )
}

const Work = styled(motion.div) `
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
@media screen and (max-width: 1300px){
    padding: 2rem 2rem;
}
h2{
    padding: 1rem 0rem;    
}
`
const Movie = styled(motion.div) `
padding-bottom: 10rem;
.line{
    min-height: 0.5rem;
    background-color: crimson;
    margin-bottom: 3rem;
}
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
`
const Hide = styled.div `
    overflow: hidden;
`
//Frame animation
const Frame1  = styled(motion.div) ` 
    position: fixed;
    top: 10%;
    left: 0px;
    width: 100%;
    height: 100vh;
    background-color: #fffebf;
    background-color:#23D997;
    background-color: magenta;
    z-index: 2;
`

const Frame2 = styled(Frame1) ` 
    background-color: #ff8efb;
    background-color: crimson;
    background-color:#3C819C;
`
const Frame3 = styled(Frame1) ` 
    background-color: #8ed2ff;
    background-color: #ff8efb;
    background-color: #23D997;
`
const Frame4 = styled(Frame1) ` 
    background-color: #8effa0;
    background-color: #8ed2ff;
    background-color: #B19434;
`

export default MyWork;