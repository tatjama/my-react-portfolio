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
.cta{
    position: fixed;
    top: 13rem;
    right: 5rem
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
         font-size: 2rem;
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
    
    li{
        font-size:1.2rem;
        line-height:150%;
        color:#ccc;
        padding: 0.2rem 0rem 0.2rem 1rem;
        margin-left: 2rem;
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
    }
    @media screen and (max-width: 1300px){
        h2{
            font-size: 3rem;
        }
    }
    @media screen and (max-width: 1000px){
        .cta{
            top: 3rem;
            right:12%;
            z-index:10;
        }
    }
    @media screen and (max-width: 650px){
        li{
            margin-left: 1rem;
            padding: 0.2rem 0rem 0.2rem 0.5rem;
        }
        .cta{
            top: 3.5rem;
            right: 10%;
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
        }
        
    }
`

export default GlobalStyle;