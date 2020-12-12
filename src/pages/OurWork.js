import React from 'react';
//Styled
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Images
import athlete from '../img/athlete-small.png';
import goodtimes from '../img/goodtimes-small.png';
import theracer from '../img/theracer-small.png';
//Animations
import {motion} from 'framer-motion';
import {pageAnimation, fade, imageAnimation, lineAnimation, slider, sliderContainer } from '../animation';
import { UseScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const OurWork = () => {
    const [ element, controls ] = UseScroll();
    const [ element2, controls2 ] = UseScroll();
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
                <motion.h1 variants = { fade }>The Athlete</motion.h1>
                <motion.div variants = { lineAnimation } className = "line"></motion.div>
                <Link to = "/work/the-athlete">
                    <Hide>
                        <motion.img variants = {imageAnimation} src = {athlete} alt = "the-athlete"/>
                    </Hide>
                </Link>
            </Movie>
            <Movie variants = { fade } animate = { controls } initial = "hidden" ref = {element}>
                <h1>The Racer</h1>
                <motion.div variants = {lineAnimation} className = "line"></motion.div>
                <Link to = "/work/the-racer">
                    <img src = {theracer} alt = "the-racer"/>
                </Link>
            </Movie>
            <Movie variants = { fade } animate = {controls2} initial = "hidden" ref = { element2 }>
                <h1>Good Times</h1>
                <motion.div variants = { lineAnimation }  className = "line"></motion.div>
                <Link to = "/work/good-times">
                    <img src = {goodtimes} alt = "good-time"/>
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

export default OurWork;