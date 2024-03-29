import React from 'react';
//Scroll animation
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const UseScroll = () => {
    const controls = useAnimation();
    const [ element, view] = useInView({ threshold: 0.3 });
    
    if(view){
        controls.start("show")
    }else{
        controls.start("hidden")
    }
    return (
        [element, controls]
    )
}
