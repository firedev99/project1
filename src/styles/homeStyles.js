import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Banner = styled.div`
    background: ${props => props.theme.background};
    height: 100vh;
    width: auto;
    position: relative;
    margin-bottom: 250px;
`
export const Video = styled.div`
    height: 100%;
    width: 100%;
    video {
        object-fit: cover;
        opacity: 0.9;
    }
`
export const Canvas = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
`
export const BannerTitle = styled(motion.h1)`
    position: absolute;
    pointer-events: none;
    left: -20px;
    bottom: -20px;
    color: ${props => props.theme.text};
`
export const Headline = styled(motion.span)`
    display: block;
    font-size: 13rem;
    font-family: "Permanent Marker";
    font-weight: 600;
    line-height: 0.77;
`

//HomeContent
export const HomeContentSection = styled(motion.div)`
    margin-bottom: 170px;
`
export const Content = styled.div`
    width: 55%;
    color: ${props => props.theme.text};
    line-height: 1.65;
    h3{
        font-size: 1.5rem;
        line-height: 1.2;
        margin-bottom: 0.5rem;
    }
    p {
        font-size: 1.3rem;
        font-weight: 500;
    }
`

//FeatureContent
export const FeaturedContentSection = styled(motion.div)`
    position: relative;
    height: 500px;
    margin-bottom: 250px;
`
export const FeaturedContent = styled.div`
    position: absolute;
    width: 100%;
    padding: 4rem;
    color: #ffffff;
    font-weight: 600;
    .details {
        span {
            &:last-child {
                margin-left: 1rem;
                margin-right: 3.5rem;
            }
        }
    }
    .featured-title {
        color: ${props => props.theme.text};
        position: relative;
        bottom: -250px;
        font-size: 6rem;
        line-height: 0.8;
    }
    .arrow {
        position: relative;
        bottom: -265px;
        height: 72px;
        width: 120px;
        display: block;
        overflow: hidden;
        svg {
            position: absolute;
            width: 7rem;
            left: -45px;
            path {
                fill: ${props => props.theme.text}
            }
        }
    }
`
export const FeaturedVideo = styled.div`
    height: 100%;
    width: 100%;
    video {
        height: 430px;
        width: 100%;
        object-fit: cover;
    }

`