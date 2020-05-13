import styled from 'styled-components'
import {motion} from 'framer-motion'

export const HeaderNav = styled(motion.div)`
    width: 100%;
    position: absolute;
    z-index: 99;
    top: 4rem;
    font-family: "Permanent Marker";
`
export const Logo = styled.div`
    a {
        color: ${props => props.theme.text};
        font-size: 2rem;
        letter-spacing: 0.1rem;
        font-weight: 800;
    }
    span {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        background: ${props => props.theme.red};
        border-radius: 100%;
        margin: 0 4.5px 3.5px 3px;
    }
`
export const Menu = styled.div`
    button {
        outline: none;
        border: none;
        background: transparent;
        position: relative;
        span {
            display: block;
            width: 1.8rem;
            height: 0.3rem;
            margin-bottom: 0.5rem;
            background: ${props => props.theme.text};
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
`