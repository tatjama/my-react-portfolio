import React , {useState} from 'react';
import { motion } from 'framer-motion';
import arrow from "../img/arrow-up.svg";
import styled from 'styled-components';

const Toggle = ({ children, title }) => {
const [toggle, setToggle] = useState(false)

    return(
        <motion.div layout className = "question" onClick = { () => setToggle(!toggle) }>
            
            <Arrow layout><h4>{title}</h4> <img className= {toggle? "arrow_up" : "arrow_down"} src = {arrow} alt = "arrow"/></Arrow>
            {toggle ? children : ""}
            <div className = "faq-line"></div>
            
        </motion.div>
    )
}

export default Toggle;
const Arrow = styled(motion.div)` 
display: flex;
flex-direction: row;
justify-content: space-between;
.arrow_down{
    transform: rotate(180deg);
}
`