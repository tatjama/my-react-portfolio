import React from 'react';
//Sections import
import home1 from '../img/home1.png';
import Wave from '../Wave';
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
                        <motion.h2 variants = {titleAnimation}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants = {titleAnimation}> your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants = {titleAnimation}> true.</motion.h2>
                    </Hide>
                </motion.div>                
                <motion.p variants = {fade}>Contact us for every photography, videography idea that you have. We have professionals
                    with amazing skills.
                </motion.p>
                <motion.button variants = {fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants = {imageAnimation} src = {home1} alt = "gay-with-camera"/>
            </Image>
            <Wave/>
        </About>
    )
}

//Styled

export default AboutSection;