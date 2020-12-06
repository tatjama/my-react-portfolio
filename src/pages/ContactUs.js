import React from 'react';
//Animations
import { motion } from 'framer-motion';
import {pageAnimation, titleAnimation} from '../animation';
//Styled
import styled from 'styled-components';

const ContactUs = () => {
    return(
        <ContactStyle
            variants = {pageAnimation} 
            initial = "hidden" 
            animate = "show" 
            exit = "exit"
            style = {{ background: "#ffffff" }}
        >
            <Title>
                <Hide>
                    <motion.h2 variants = {titleAnimation}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants = {titleAnimation}>
                        <Circle/>
                            <h2>Sent Us A Message.</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants = {titleAnimation}>
                        <Circle/>
                            <h2>Sent Us E-mail.</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants = {titleAnimation}>
                        <Circle/>
                            <h2>Social Media.</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>

    )
}
const ContactStyle = styled(motion.div) ` 
padding: 5rem 10rem;
color: #353535;
height: 90vh;
@media screen and (max-width: 1300px){
    padding: 2rem;
    font-size: 1rem;
}
`
const Title = styled.div ` 
color: black;
margin-bottom: 4rem;
@media screen and (max-width: 1300px){
    margin-top: 5rem;
}
`
const Hide = styled.div ` 
overflow: hidden;
`
const Circle = styled.div ` 
width: 3rem;
height: 3rem;
background-color: #353535;
border-radius: 50%;
`
const Social = styled(motion.div) ` 
display: flex;
align-items: center;
h2{
    margin: 2rem;
}
`

export default ContactUs;