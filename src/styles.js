import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-around;
padding: 5rem 10rem;
color: white;
@media screen and (max-width: 1000px){
        display: block;
        padding: 2rem 1rem;
        text-align: center;
    }
`
export const Description = styled.div`
flex:1;
padding-right: 5rem;
h2{
    font-weight: lighter;
}
@media screen and (max-width: 1300px){
    button{
        margin: 2rem 0rem 5rem 0rem;
    }
}
@media screen and (max-width: 1000px){
    padding: 0;
}
`
export const Image = styled.div`
flex: 1;
overflow: hidden;
img{
    width: 100%;
    height: 50vh;
    object-fit: cover;
}
@media screen and (max-width: 1300px){
    height: 40vh;
}
@media screen and (max-width:1000px){
    height: 100%;
}
`
export const Hide = styled.div`
    overflow:hidden;
`