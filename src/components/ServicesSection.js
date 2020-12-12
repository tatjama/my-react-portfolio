import React from 'react';
//Import Icons
//import clock from '../img/clock.svg';
//import diaphragm from '../img/diaphragm.svg';
//import money from '../img/money.svg';
//import teamwork from '../img//teamwork.svg';
import home2 from '../img/home2.png';
import women from '../img/bw_women.jpg';
import keynoard from '../img/keyboard-light.jpg';
import dm from '../img/dm.svg';
import softwareIng from '../img/soft-eng.svg';
import dmRed from '..//img/dm-red.svg';
import develop from '../img/develop.svg';
import mobileDevelop from '../img/mobile-development.svg';
import mobile from '../img/mobile.svg';
import next from '../img/next.svg';
import snippet from '../img/snippet.svg';
import feedback from '../img/feedback.svg';
import reactIcon from '../img/react (1).svg';
import research from '../img/research.svg';
import workingLate from '../img/working_late .svg'
import wordPress from '../img/wordpress.svg';
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
                            <img src = {dm} alt = "digital-marketing-icon"/>
                        </div>
                            <h3>Efficient</h3>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img alt = "teamwork-icon" src = {feedback}/>
                            
                        </div>
                        <h3>Teamwork</h3>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {dmRed} alt = "digital-marketing-icon"/>
                            
                        </div>
                        <h3>Diaphragm</h3>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {develop} alt = "money-icon"/>
                            
                        </div>
                        <h3>Develop</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {mobileDevelop} alt = "money-icon"/>
                            
                        </div>
                        <h3>Affordable</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {mobile} alt = "money-icon"/>
                            
                        </div>
                        <h3>Mobile</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {next} alt = "money-icon"/>
                            
                        </div>
                        <h3>Next.js</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {snippet} alt = "money-icon"/>
                            
                        </div>
                        <h3>Snippet</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {softwareIng} alt = "money-icon"/>
                            
                        </div>
                        <h3>Software eng</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {reactIcon} alt = "money-icon"/>
                            
                        </div>
                        <h3>React</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {research} alt = "money-icon"/>
                            
                        </div>
                        <h3>Research</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {workingLate} alt = "money-icon"/>
                            
                        </div>
                        <h3>Working late</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className = "icon">
                            <img src = {wordPress} alt = "money-icon"/>
                            
                        </div>
                        <h3>WordPress</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>                
            </Description>
            <Image>
                <img src = {keynoard} alt = "camera"/>
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