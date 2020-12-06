import React from 'react';
//Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img//teamwork.svg';
import home2 from '../img/home2.png';
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
                <h2>Hight <span>quality</span> service.</h2>
                <Cards>
                    <Card>
                        <div className = "icon">
                            <img src = {clock} alt = "clock-icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img alt = "teamwork-icon" src = {teamwork}/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {diaphragm} alt = "diaphragm-icon"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {money} alt = "money-icon"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>                
            </Description>
            <Image>
                <img src = {home2} alt = "camera"/>
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
        display: flex;
        align-items: center;
    }
    h3{
        color: black;
        background-color: white;
        margin-left: 1rem;
        padding: 1rem;
    }
    @media screen and (max-width: 1300px){
        h3{
            font-size: 1rem;
        }
        p{
            font-size: 0.8rem;
        }
    }
`

export default ServicesSection;