import React from 'react';
import Toggle from './Toggle';
//Style
import styled from 'styled-components';
import {About} from '../styles';
//Animation
import { AnimateSharedLayout } from 'framer-motion';
import { UseScroll } from './useScroll';
import { scrollRevealer } from '../animation';

const FaqSection = () => {
    const [ element, controls ] = UseScroll();
    return(
        <Faq variants = { scrollRevealer } ref = {element} animate = {controls} initial = "hidden">
            <h2>Hight <span> quality </span> service</h2>
            <AnimateSharedLayout>
                <Toggle title = "Web development">
                        <div className = "answer" >
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum, dolor sit amet conscetetur adipisic Necessitatibus, neque.</p>
                        </div>                  
                </Toggle>
                <Toggle title = "Web design.">
                        <div className = "answer" >
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum, dolor sit amet conscetetur adipisic Necessitatibus, neque.</p>
                        </div>
                </Toggle>
                <Toggle title = "Graphic design.">
                        <div className = "answer" >
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum, dolor sit amet conscetetur adipisic Necessitatibus, neque.</p>
                        </div>
                </Toggle>
                <Toggle title = "Search engine optimisation">
                        <div className = "answer" >
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum, dolor sit amet conscetetur adipisic Necessitatibus, neque.</p>
                        </div>
                </Toggle>
                <Toggle title = "Digital marketing.">
                        <div className = "answer" >
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum, dolor sit amet conscetetur adipisic Necessitatibus, neque.</p>
                        </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About) `
    display: block;
    
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection