
import React from 'react';
//import Styled
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';


const Nav = () => {
    const { pathname } = useLocation();
    return(
        <StyledNav>
            <h1><Link id = "logo" to = "/">Portfolio</Link></h1>
            <ul>
                <li>
                    <Link to = "/">1. About Me</Link>
                    <Line 
                        transition = {{duration: 0.75}} 
                        initial = {{width: "0%"}} 
                        animate = {{width: (pathname === "/") ? "50%" : "0%" }} 
                    />
                </li>
                <li>
                    <Link to = "/work">2. My Work</Link>
                    <Line 
                        transition = {{duration: 0.75}} 
                        initial = {{width: "0%"}} 
                        animate = {{width: (pathname === "/work") ? "50%" : "0%" }} 
                    />
                </li>
                <li>
                    <Link to = "/contact">3. Contact Me</Link>
                    <Line 
                        transition = {{duration: 0.75}} 
                        initial = {{width: "0%"}} 
                        animate = {{width: (pathname === "/contact") ? "50%" : "0%" }} 
                    />
                </li>
            </ul>

        </StyledNav>
    )
}
//Style
const StyledNav = styled.nav `
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    margin: auto;
    background-color: #282828;
    position: sticky;
    top: 0px;
    z-index: 10;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-family: "Lobster", cursive;
        font-weight: lighter;
        font-size: 1.5rem;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
    @media screen and (max-width: 1000px){
        flex-direction: column;
        padding: 2rem 1rem;
        #logo{
            display: inline-block;
            margin: 2rem;
        }
        ul{
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
            li{
                padding: 0px;
            }
        }
    }
`
const Line = styled(motion.div) ` 
    height: 0.3rem;
    width: 0%;
    background-color: crimson;
    position: absolute;
    bottom: -80%;
    left: 60%;
    @media screen and (max-width: 1000px){
        left: 30%;        
    }
`

export default Nav