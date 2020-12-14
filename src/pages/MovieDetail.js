import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import { useHistory, Link } from 'react-router-dom';
import {MovieState} from '../movieState';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation} from '../animation';
//Section-pages
import BtaSection from '../components/BtaSection';
import ETicket from '../components/ETicket';
import PlayerSection from '../components/PlayerSection';
import FullFunSection from '../components/FullFunSection';
import RockPaperScissorsSection from '../components/RockPaperScissorsSection';

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null)
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
        setMovie(currentMovie[0])
    }, [movies, url])

    return(
        <>
        {movie &&(
            <Details variants = {pageAnimation} initial = "hidden" animate = "show" exit = "exit">
                <HeadLine>
                    <h2>{movie.title}</h2>
                    <img src = {movie.mainImg} alt = {movie.title}/>
                </HeadLine>     
                <Awards>
                    {movie.awards.map((award) => (
                          <Award title = {award.title} description = {award.description}  key = {award.title}/>
                    ))}
                    {movie.content &&<AwardContent  
                        title = {movie.content.title} 
                        description = {movie.content.section} 
                        key = {movie.content.title}
                    />}
                </Awards>      
                <ImageDisplay>
                    <img src = {movie.secondaryImg} alt = "movie"/>
                </ImageDisplay> 
            </Details>
        )}
        
        </>
    )
}

const Details = styled(motion.div) `
color: white;
`
const HeadLine = styled.div `
min-height: 90vh;
padding-top: 20vh;
position: relative;
h2{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
}
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
@media screen and (max-width: 800px){
    h2{
        font-size: 2.6rem;
        width: 100%;
        text-align: center;
    }
}
`
const Awards = styled.div `
min-height: 80vh;
margin: 5rem 10rem;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
@media screen and (max-width:1500px){
    margin: 5rem 4rem;
}
@media screen and (max-width: 1275px){
    display: block;
    margin: 2rem 2rem;
}
`
const AwardStyle = styled.div `

width: 30%;
&:last-of-type{
    width: 100%;
}
padding: 5rem;
h3{
    font-size: 2rem;
}
.award-toggle{
    cursor: pointer;
}
.line{
    height: 0.5rem;
    width: 100%;
    background-color: crimson;
    margin: 1rem 0rem;
}
p{
    padding: 2rem 0rem;
}
@media screen and (max-width: 1500px){
    padding: 5rem 2.4rem;
}
@media screen and (max-width:1275px){
    width: 100%;
}
@media screen and (max-width:800px){
    padding: 2rem 1rem;    
}
`
const ImageDisplay = styled.div `
min-height: 50vh;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

//Award component
const Award = ({title, description}) => {
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className = "line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}
const AwardContent = ({title, description}) => {
    const [toggle, setToggle] = useState(false)

    return(
        <AwardStyle >
             <Link target="_blank" to = {`/${description}`}>
                <button className="cta">
                    Go to App
                </button>
            </Link>
            <h3 className="award-toggle" onClick = {() => setToggle(!toggle)}>
                
                {toggle ? <>{title} <span> show less...</span></> : <>{title} <span> show more...</span></>}
            </h3>
            <div className = "line"></div>
            {toggle && <>
                {(description === "bta")? <BtaSection/>: (description === "eticket")?  <ETicket/> 
                : (description === "player")? <PlayerSection/> : (description === "rock") ? <RockPaperScissorsSection/>
                : (description === "fullfun") ? <FullFunSection/> : <div></div>
                }
           </>
           }        
        </AwardStyle>
    )
}
export default MovieDetail;