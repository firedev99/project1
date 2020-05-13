import styled from "styled-components";
import {motion} from 'framer-motion'
export const AboutContainer = styled(motion.div)`
    height: 100%;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
        img { 
            height: 100%;
            width: 100%;
            background-size: cover;
            opacity: 0.7;
        }
`
export const AboutTitle = styled(motion.h1)`
    position: absolute;
    top: 8rem;
    font-size: 4rem;
    z-index: 10;
    font-weight: 800;
    font-family: "Permanent Marker";
    color: ${props => props.theme.text};
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;    
`
export const AboutContact = styled(motion.div)`
    display: flex;
    position: absolute;
    z-index: 10;
    width: 100%;
    top: 25rem;
    a {
        text-align: center;
        font-size: 1.3rem;
        font-family: "Permanent Marker";
        letter-spacing: 0.1rem;
        height: 5.2rem;
        width: 18rem;
        margin: 0 2.3rem;
        color: ${props => props.theme.text};
        .social-box {
            margin-top: 1rem;
            display: flex;
            justify-content: center;
            svg {
                width: 2rem;
                path {
                    fill: ${props => props.theme.text};
                }
            }
        }

    }
`
