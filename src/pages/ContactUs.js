import React, {useState} from 'react';
import {Link} from 'react-router-dom';
//Animations
import { motion } from 'framer-motion';
import {pageAnimation, titleAnimation} from '../animation';
//Styled
import styled from 'styled-components';

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
                            <Circle/>
                                <h2>Sent me a message </h2>
                        </Social>
                    </Link>
                </Hide>
                <Hide>
                    <Link className="contact-me" target="_blank" to="/github">
                        <Social variants = {titleAnimation}>
                            <Circle/>
                                <h2>See me on Github</h2>
                        </Social>
                    </Link>
                </Hide>
                <Hide>
                    <Link className="contact-me" target="_blank" to="/cv">
                        <Social variants = {titleAnimation}>
                            <Circle/>
                                <h2>Check my CV</h2>
                        </Social>
                    </Link>
                </Hide>
                <Hide>
                    <Social variants = {titleAnimation} onClick = {() => setToggle(!toggle)} >
                        <Circle/>
                            <h2>Contact me by Email</h2>
                    </Social>                    
                </Hide>
                {
                toggle? 
                    <Hide>
                        <Social variants = {titleAnimation} onClick = {() => setToggle(!toggle)} >
                            
                                <h2 style = {{color: 'crimson', fontWeight: 'bold'}} >tanja120a@gmail.com</h2>
                        </Social>                    
                    </Hide> : ""}
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
width: 2rem;
height: 2rem;
background-color: #353535;
border-radius: 50%;
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