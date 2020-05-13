import styled from 'styled-components'
import {motion} from 'framer-motion'

export const ContentVideo = styled(motion.div)`
    height: 550px;
    width: 1000px;
    margin: 0 auto;
    display: block;
    position: relative;
    top: 8rem;
    margin-bottom: 300px;
`

export const HeaderContent = styled(motion.div)`
    position: absolute;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2rem 3rem;
    h3 { 
        font-size: 1.1rem;
        text-transform: uppercase;
        color: ${props => props.theme.text};
        font-family: "Permanent Marker";
        letter-spacing: 0.1rem;
    }
    .hovered {
        span {
            color: ${props => props.theme.text};
            font-size: 1.1rem;
            letter-spacing: 0.1rem;
            font-weight: 600;
            font-family: "Permanent Marker";
            &:last-child {
                margin-left: 0.8rem;
                font-weight: 800;
            }
        }
}
`
export const OutletVideo = styled(motion.div)`
    position: absolute;
    z-index: -1;
    video {
        height: 450px;
        width: 100%;
        object-fit: cover;
        opacity: 0.85;
    }
`

export const MerchandiseTitle = styled(motion.h1)`
    position: absolute;
    display: block;
    bottom: 1.6rem;
    left: 3.4rem;
    font-size: 4.2rem;
    font-weight: 800;
    letter-spacing: -0.2rem;
    line-height: 0.95;
    color: ${props => props.theme.text};
`

export const MContainer = styled(motion.div)`
    width: 57%;
    display: block;
    color: ${props => props.theme.text};
    padding-left: 1.8rem;
    margin-bottom: 150px;
`
export const MContent = styled.div`
    h2 {
        font-family: "Permanent Marker";
        font-size: 1.6rem;
        margin-bottom: 1rem;
        line-height: 1.1;
        text-align: left;
        letter-spacing: 0.1rem;
    }
    p {
        line-height: 1.6;
        font-size: 1.15rem;
        font-weight: 500;
    }
`
export const ThirdContent = styled(motion.div)`
    color: ${props => props.theme.text};
    padding-left: 1.4rem;
    margin-bottom: 250px;
`
export const MList = styled(motion.div)`
    list-style-type: none;
    .flex-1, .flex-2 { 
        display: flex;
        margin: 1rem 0;
        .city {
            margin: 0 0.4rem;
            width: 28rem;
            height: 5rem;
            font-size: 1.1rem;
            font-weight: 600;
            font-family: "Permanent Marker";
            letter-spacing: 0.05rem;
            display: flex;
            flex-direction: column;
                span {
                    opacity: 0.8;
                    font-size: 0.8rem;
                    margin-top: 10px;
                }
         }
    }
    
`