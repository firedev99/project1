import styled, {css} from 'styled-components'
import {motion} from 'framer-motion'

export const Container = styled.div`
    flex-grow: 1;
    width: auto;
    height: 100%;
    position: relative;
    margin: 0 auto;
    padding: 0 32px;
    ${props => props.fluid && css`
        max-width: 100%;
    `}
    @media (min-width: 1024px) {
        max-width: 856px;
    }
    @media (min-width: 1216px) {
        max-width: 1024px;
    }
    @media (min-width: 1408px) {
        max-width: 1122px
    }
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    ${props => props.spaceBetween && css`
        justify-content: space-between;
    `}
    ${props => props.noHeight && css`
        height: 0;
    `}
`
export const Cursor = styled.div`
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    pointer-events: none;
    background: ${props => props.theme.red};
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 100%;
    transition: all 0.1s ease-in-out;
    transition-property: width, height, border;
    will-change: width, height, border, transform;
    &.hovered {
        border: 2px solid ${props => props.theme.red};
        width: 3rem;
        height: 3rem;
        background: transparent;
    }
    &.pointer {
        border: 2px solid ${props => props.theme.text}!important;
    } 
    &.nav-open {
        background: ${props => props.theme.text};
        width: 1.5rem;
        height: 1.5rem;
    }
`

//Navigation
export const Nav = styled(motion.div)`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background: ${props => props.theme.red};
    height: 100%;
    width: 100%;
    overflow: hidden;
    scroll-y: none;
    display: block;
`
export const NavHeader = styled.div`
    position: relative;
    z-index: 99;
    top: 4rem;
    h3 {
        font-family: "Permanent Marker";
        color: ${props => props.theme.text};
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
        font-weight: 800;
        text-transform: uppercase;
    }
`
export const CloseNav = styled(motion.div)`
 button {
        outline: none;
        border: none;
        background: transparent;
        position: relative;
        span {
            display: block;
            width: 2.3rem;
            height: 0.4rem;
            margin-bottom: 0.5rem;
            background: ${props => props.theme.text};
            &:first-child{
                transform: rotate(-48deg) translate(-6px, 8px);
            }
            &:last-child {
                transform: rotate(45deg) translate(-2px,-4px);
            }
        }
    }
`

export const NavList = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    ul {
        padding: 0;
        li {
            list-style-type: none;
            height: 5.3rem;
            line-height: 5.3rem;
            overflow: hidden;
            a {
                color: ${props => props.theme.text};
                font-size: 3.1rem;
                font-family: "Permanent Marker";
                text-transform: uppercase;
                .link {
                    position: relative;
                    .arrow {
                        margin-right: 0.6rem;
                        svg {
                            height: 2.7rem;
                        }
                        path {
                            fill: ${props => props.theme.text};
                        }
                    }
                }
            }
        }
    }
`

export const NavVideos = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 28%;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: ${props => props.theme.text};
    .reveal {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        background: ${props => props.theme.red};
    }
    .videos {
        position: absolute;
        z-index: -1;
        height: 100%;
        video {
            height: 100%;
            object-fit: cover;
        }
    }
`