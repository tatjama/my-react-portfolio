import React from 'react';
//Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img//teamwork.svg';
import keyboard from '../img/keyboard.jpg';
import top from '../img/top.jpg';
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

const ServicesSection1 = () => {
    const [ element, controls] = UseScroll();
    return(
        <Service variants = { scrollRevealer } animate = { controls } initial = "hidden" ref = {element}>
            <Description>
                <h2>Modern tehnology <span> skills</span>.</h2>
                <Cards>
                    <Card>
                        <div className = "icon">
                            <img src = {js} alt = "digital-marketing-icon"/>
                            <h3>Javascript</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>   
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img alt = "teamwork-icon" src = {react}/>
                            <h3>React</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {css} alt = "digital-marketing-icon"/>
                            <h3>CSS</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {sass} alt = "money-icon"/>
                            <h3>SASS</h3>
                        </div>
                        
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {dm} alt = "money-icon"/>
                            <h3>Marketing</h3>
                        </div>
                        
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {next} alt = "money-icon"/>
                            <h3>Next</h3>
                        </div>
                        
                        <p>Lorem ipsum dolor sit amet.</p>
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
    @media screen and (max-width: 1300){
        justify-content: center;
    }
`
const Card = styled.div `
    flex-basis: 14rem;
    .icon{
        padding: 1rem 1rem;
        display: flex;
        align-items: center;
    }
    h3{
        color: black;
        background-color: white;
        margin-left: 1rem;
        padding: 1rem;
        min-width: 105px;
        text-align: center;
    }
    @media screen and (max-width: 1300px){
        h3{
            font-size: 1rem;
            padding: 1rem 0.5rem;
        }
        p{
            font-size: 0.8rem;
        }
        .icon {
            width: 150px;
            height: 50px;
            img{
                width: 75px;
                height: 50px;
            }
            h3{
                min-width: 70px
            }
        }
    }
`

export default ServicesSection1;