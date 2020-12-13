import React, {useState} from 'react';
import {Link} from 'react-router-dom';
//Animations
import { motion } from 'framer-motion';
import {pageAnimation, titleAnimation} from '../animation';
//Styled
import styled from 'styled-components';
//Images
import linkdin from '../img/linkedin (2).png';
import github from '../img/github.png';
import email from '../img/send-mail.png';
import cv from '../img/portfolio.png';

const ContactUs = () => {

    const [toggle, setToggle] = useState(false)
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
                    <Link className="contact-me" target = "_blank" to="/linkdin">
                        <Social variants = {titleAnimation}>
                            <Circle>
                                <img src = {linkdin} alt="linkedIn"/>
                            </Circle>
                                <h2>Sent me a message </h2>
                        </Social>
                    </Link>
                </Hide>
                <Hide>
                    <Link className="contact-me" target="_blank" to="/github">
                        <Social variants = {titleAnimation}>
                            <Circle>
                                <img  src={github} alt = "github"/>
                            </Circle>
                                <h2>See me on Github</h2>
                        </Social>
                    </Link>
                </Hide>
                <Hide>
                    <Link className="contact-me" target="_blank" to="/cv">
                        <Social variants = {titleAnimation}>
                            <Circle>
                                <img src={email} alt="email"/>
                            </Circle>
                                <h2>Check my CV</h2>
                        </Social>
                    </Link>
                </Hide>
                <Hide>
                    <Social variants = {titleAnimation} onClick = {() => setToggle(!toggle)} >
                        <Circle>
                            <img src = {cv} alt = "cv"/>
                        </Circle>
                            <h2>Contact me by Email</h2>
                    </Social>                    
                </Hide>
                {
                toggle&& 
                    <Hide>
                        <Social variants = {titleAnimation} onClick = {() => setToggle(!toggle)} >                            
                                <h2 style = {{color: 'crimson', fontWeight: 'bold'}} >tanja120a@gmail.com</h2>
                        </Social>                    
                    </Hide> }
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
cursor: pointer;
`
const Circle = styled.div ` 
width: 4rem;
height: 4rem;
padding: 10px;
//background-color: #353535;
background-color: crimson;
border-radius: 50%;
img{
    width: 100%;
    height: 100%;
}
`
const Social = styled(motion.div) ` 
display: flex;
align-items: center;
h2{
    margin: 2rem;
    font-size: 2rem;
}
`

export default ContactUs;