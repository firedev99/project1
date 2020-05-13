import React, { useState } from 'react'
import {Container, Flex, Nav, NavHeader, CloseNav, NavList, NavVideos} from '../styles/globalStyles'
import { Link } from 'gatsby'
import {motion, AnimatePresence} from 'framer-motion'

const navRoutes = [
    {
        id: 0,
        title: "Foundations",
        path: "/foundations-page",
        video: "video1.mp4",
    },
    {
        id: 1,
        title: "Merchandise Outlet",
        path: "/merchandise-outlet-page",
        video: "video2.mp4",
    },
    {
        id: 2,
        title: "Gallery",
        path: "/gallery-page",
        video: "video3.mp4",
    },
    {
        id: 3,
        title: "Showcase",
        path: "/showcase-page",
        video: "video4.mp4",
    },
    {
        id: 4,
        title: "About US",
        path: "/about-page",
        video: "video6.mp4",
    }
]


const Nagigation = ({onCursor, toggleMenu, setToggleMenu}) => {
    const [revealVideo, setRevealVideo] = useState({
        show: false,
        video: "video1.mp4",
        key: "0"
    })
    return (
        <>
            <AnimatePresence>
                {toggleMenu && (
                    <Nav
                    onMouseEnter={() => onCursor("nav-open")}
                    onMouseLeave={onCursor}
                    initial={{x: "-100%"}} exit={{x: "-100%"}} animate={{x: "0"}} transition={{duration: 0.8, ease: [0.6,0.05,-0.01,0.9]}}>
                        <Container>
                            <NavHeader>
                                <Flex spaceBetween noHeight>
                                    <h3>accessibilities</h3>
                                    <CloseNav onMouseEnter={() => onCursor("pointer")} onMouseLeave={() => onCursor("nav-open")}
                                        onClick={() => setToggleMenu(!toggleMenu)}
                                    >
                                        <button>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </CloseNav>
                                </Flex>
                            </NavHeader>
                            <NavList >
                                        <ul>
                                            {navRoutes.map(route => (
                                                <motion.li
                                                onMouseEnter={() => onCursor("pointer")} onMouseLeave={() => onCursor("nav-open")}
                                                onHoverStart={() => setRevealVideo({
                                                    show: true,
                                                    video: route.video,
                                                    key: route.id
                                                })}
                                                onHoverEnd={() => setRevealVideo({
                                                    show: false,
                                                    video: route.video,
                                                    key: route.id
                                                })}
                                                key={route.id}>
                                                    <Link to={`${route.path}`}>
                                                        <motion.div
                                                        initial={{x: -80}}
                                                        whileHover={{x: 0, transition: {
                                                            duration: 0.4,
                                                            ease: [0.6,0.05,-0.01,0.9]
                                                        }}}
                                                        className="link">
                                                            <span className="arrow">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 101 57"
                                                                >
                                                                <path
                                                                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                                                    fill="#000"
                                                                    fillRule="evenodd"
                                                                >
                                                                </path>
                                                                </svg>
                                                            </span>
                                                            {route.title}
                                                        </motion.div>
                                                    </Link>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </NavList>
                                    <NavVideos>
                                        <motion.div
                                        animate={{width: revealVideo.show ? "0" : "100%"}}
                                        className="reveal"></motion.div>
                                        <div className="videos">
                                            <AnimatePresence initial={false} exitBeforeEnter>
                                                <motion.video
                                                key={revealVideo.key}
                                                initial={{opacity: 0}}
                                                exit={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                transition={{
                                                    duration: 0.2,
                                                    ease: 'easeIn'
                                                }}
                                                src={require(`../assests/${revealVideo.video}`)} loop autoPlay muted
                                                >
                                                </motion.video>
                                            </AnimatePresence>
                                        </div>
                                    </NavVideos>
                        </Container>
                    </Nav>
                )}
            </AnimatePresence>
        </>
    )
}

export default Nagigation

