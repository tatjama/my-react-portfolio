import React from 'react';
//Import Icons
import keyboard from '../img/keyboard.jpg';
import js from '../img/js.svg';
import javascript from '../img/avascript-logo.svg'
import ts from '../img/typescript.svg';
import next from '../img/next_icon.svg';
import node from '../img/node-144.svg';
import express from '../img/express-js.svg';
import mysql from '../img/mysql-logo.svg';
import postgres from '../img/postgresql.svg';
import mongodb from '../img/mongodb.svg';
import css from '../img/css.svg';
import sass from '../img/sass.svg';
import react from '../img/react.svg';
import redux from '../img/redux.svg';
import dm from '../img/010-smartphone.svg';
import angular from '../img/angular.svg';
//Styles
import {About, Description} from '../styles';
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
                            <img src = {javascript} alt = "digital-marketing-icon"/>                            
                        </div>
                        <h3>JavaScript</h3>   
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {ts} alt = "digital-marketing-icon"/>                            
                        </div>
                        <h3>TypeScript</h3>   
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img alt = "teamwork-icon" src = {react}/>                            
                        </div>
                        <h3>React</h3>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img alt = "teamwork-icon" src = {redux}/>                            
                        </div>
                        <h3>Redux</h3>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {node} alt = "money-icon"/>                            
                        </div>
                        <h3>Node</h3>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {express} alt = "money-icon"/>                            
                        </div>
                        <h3>Express</h3>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {mysql} alt = "money-icon"/>                            
                        </div>
                        <h3>MySQL</h3>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {postgres} alt = "money-icon"/>                            
                        </div>
                        <h3>postgreSQL</h3>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {mongodb} alt = "money-icon"/>                            
                        </div>
                        <h3>mongoDB</h3>
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
                </Cards>                
            </Description>
            <Image>
                <img src = {keyboard} alt = "keyboard"/>
            </Image>

        </Service>
    )
}
const Service = styled(About)`
padding: 5rem 5rem;
display: flex;
align-items: stretch;

h2{
    padding-bottom: 5rem;
}
p{
    width: 70%;    
    padding: 2rem 0rem 4rem 0rem;
}

@media screen and (max-width: 1000px){
    flex-direction: column;
}

`
export const Image = styled.div`
flex: 1;
overflow: hidden;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
@media screen and (max-width:1000px){
    padding-top: 5rem;
    height: 100%;
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
        justify-content: space-evenly;
        height: 150px;
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