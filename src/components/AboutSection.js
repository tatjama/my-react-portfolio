import React from 'react';
import {Link} from 'react-router-dom';
//Sections import
//import home1 from '../img/home1.png';
import Wave from '../Wave';
//import women from '../img/bw_women.jpg';
import notebook from '../img/notebook.jpg'
// Animation
import {motion} from 'framer-motion';
import {titleAnimation, fade, imageAnimation } from '../animation';
//Styled
import {About, Description, Image, Hide} from '../styles';

const AboutSection = () => {
    return(
        <About>            
            <Description>
                <motion.div className = "title">
                    <Hide>
                        <motion.h2 variants = {titleAnimation}>My goal is to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants = {titleAnimation}> your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants = {titleAnimation}> true.</motion.h2>
                    </Hide>
                </motion.div>                
                <motion.p variants = {fade}>Contact me for any idea you have regarding web development, digital marketing and search engine optimization
                </motion.p>
                <Link to="/contact">
                    <motion.button variants = {fade}>Contact Me</motion.button>
                </Link>
            </Description>
            <Image>
                <motion.img variants = {imageAnimation} src = {notebook} alt = "black-and-white-women"/>
            </Image>
            <Wave/>
        </About>
    )
}

//Styled

export default AboutSection;