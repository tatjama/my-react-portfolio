import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
html{
    @media screen and (max-width: 1700px){
        font-size: 75%
    }
   
}
body{
    background: #1b1b1b;
    font-family: "Inter", sans-serif;
    overflow-x: hidden;
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    padding: 1rem 2rem;
    cursor: pointer;
    border: 3px solid crimson;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: "Inter", sans-serif;
    &:hover{
        background: crimson;
        color: white;
    }    
}
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
         font-weight: bold;
         font-size: 1.9rem;
    }
    h5{
        font-size:1.5rem;
        padding: 3rem 0 1rem 0;
    }
    h6{
        font-size: 1.5rem;
        padding-top: 3rem;
    }
    a{
        font-size: 1.1rem;
    }
    
    span{
        font-weight: bold;
        color: red;
        //color:#9F2217;
        color: crimson;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.2rem;
        line-height: 150%;
    }
    .contact-me{
        text-decoration: none;
        color: #353535
    }
    @media screen and (max-width: 1300px){
        h2{
            font-size: 3rem;
        }
    }    
`

export default GlobalStyle;