import React from 'react';
//Import Icons
import keyboard from '../img/keyboard.jpg';
import js from '../img/js.svg';
import next from '../img/next_icon.svg';
import css from '../img/css.svg';
import sass from '../img/sass.svg';
import react from '../img/react.svg';
import dm from '../img/010-smartphone.svg';
//Styles
import {About, Description, Image} from '../styles';
import styled from 'styled-components';
//Animation
import { scrollRevealer } from '../animation';
import { UseScroll } from './useScroll';



const ServicesSection = () => {
    const [ element, controls] = UseScroll();
    return(
        <Service variants = { scrollRevealer } animate = { controls } initial = "hidden" ref = {element}>
            <Description>
                <h2>Modern tehnology <span> skills</span>.</h2>
                <Cards>
                    <Card>
                        <div className = "icon">
                            <img src = {js} alt = "digital-marketing-icon"/>
                            
                        </div>
                        <h3>Javascript</h3>   
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img alt = "teamwork-icon" src = {react}/>
                            
                        </div>
                        <h3>React</h3>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {css} alt = "digital-marketing-icon"/>
                            
                        </div>
                        <h3>CSS</h3>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {sass} alt = "money-icon"/>
                            
                        </div>
                        <h3>SASS</h3>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {dm} alt = "money-icon"/>
                            
                        </div>
                        <h3>Marketing</h3>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {next} alt = "money-icon"/>
                            
                        </div>
                        <h3>Next</h3>
                    </Card>
                    
                </Cards>                
            </Description>
            <Image>
                <img src = {keyboard} alt = "camera"/>
            </Image>

        </Service>
    )
}
const Service = styled(About)`
padding: 5rem 5rem;
h2{
    padding-bottom: 5rem;
}
p{
    width: 70%;    
    padding: 2rem 0rem 4rem 0rem;
}

`
const Cards  = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
`
const Card = styled.div `
    width: 190px;
    .icon{
        padding: 2rem 2rem;
        display: flex;
        align-items: center;
    }
    h3{
        color: black;
        background-color: white;
        margin-right: 1rem;
        padding: 1rem;
        text-align: center;
    }
    @media screen and (max-width:1535px){
        width: 170px;
        .icon{
            padding:2rem 1rem;
        }
    }
    @media screen and ( max-width: 1080px) {
        width: 120px;
        .icon{
            width: 120px;
            img{
                width: 100px;
                height: 66px;
            }
        }
        h3{
            font-size: 1rem;
            padding: 1rem 0.5rem;
            width: 100px;
        }
        p{
            font-size: 0.8rem;
        }
        
    }
    @media screen and (max-width: 420px){
        
    }
`

export default ServicesSection;