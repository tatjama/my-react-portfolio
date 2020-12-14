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
                            <p>Good quality web development will make the website stand out from competitors and attract more business.
                                 It is important that the best web development processes are used to maintain the site.</p>
                            <p>Web development is what makes a website functional and is not just about making it look good. 
                                If your website isn’t developed and maintained properly it could have a negative impact on the business.</p>
                        </div>                  
                </Toggle>
                <Toggle title = "Web design">
                        <div className = "answer" >
                            <p>As users discover your brand, they need to distinguish what sets you apart and makes you… you.</p>

                            <p>This often requires finding the right balance between compelling content and a design carefully planned to look the part.</p>
                        </div>
                </Toggle>
                <Toggle title = "Graphic design">
                        <div className = "answer" >
                            <p>Graphic design is an important tool that enhances how you communicate with other people. 
                                It serves to convey your ideas in a way that is not only effective, but also beautiful.</p>
                            <p>It makes you look good, professional and credible.</p>
                        </div>
                </Toggle>
                <Toggle title = "Search engine optimisation">
                        <div className = "answer" >
                            <p>SEO is the practice of increasing both the quality and quantity of website traffic, as well as exposure to your brand, 
                                through non-paid (also known as "organic") search engine results.</p>
                            <p>It's as much about people as it is about search engines themselves. One of the biggest advantages of SEO is that it's an inbound marketing strategy.</p>
                        </div>
                </Toggle>
                <Toggle title = "Digital marketing">
                        <div className = "answer" >
                            <p>Using digital marketing, you can reach an enormous audience in a way that is both cost-effective and measurable.</p>
                            <p>You can save money and reach more customers for less money than traditional marketing methods.</p>
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