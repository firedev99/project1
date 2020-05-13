import React, { useState, useEffect } from 'react'
import {useInView} from 'react-intersection-observer'
import { Link } from 'gatsby'
//styled 
import {Container, Flex} from '../../styles/globalStyles'
import {FeaturedContentSection, FeaturedContent, FeaturedVideo} from '../../styles/homeStyles'
import {motion, useAnimation} from 'framer-motion'

const HomeFeatured = () => {
    const [hovered, setHovered] = useState(false)
    const animation = useAnimation()
    const [featuredRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-200px"
    })

    useEffect(() => {
        if(inView) {
            animation.start("visible")
        }
    })

    return (
        <FeaturedContentSection
            ref={featuredRef}
            animate={animation}
            initial="hidden"
            variants={{
                hidden: {
                    opacity: 0,
                    y: 120,
                },
                visible: {
                    opacity: 1,
                    y: 0 
                }
            }}
            transition={{
                delay: 0.2,
                duration: 0.4,
                ease: [0.6,0.05, -0.01, 0.9]
            }}
            onHoverStart={() => setHovered(!hovered)} onHoverEnd={() => setHovered(!hovered)}>
            <Container>
                <Link>
                    <FeaturedContent>
                        <Flex spaceBetween>
                            VIA- FASHION HOUSE
                            <motion.div
                            animate={{opacity: hovered ? 1 : 0}}
                            transition={{
                                    duration: 0.6,
                                    ease: [0.6,0.05,-0.01,0.9]
                            }}
                            className="details">
                                <span>POST PONNED</span>
                                <span>2020</span>
                            </motion.div>
                        </Flex>
                        <h2 className="featured-title">THE<br/>ORIGINAL</h2>
                        <span className="arrow">
                             <motion.svg
                                animate={{x: hovered ? 45 : 0}}
                                transition={{
                                    duration: 0.2,
                                    ease: [0.6,0.05,-0.01,0.9]
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 101 57"
                            >
                            <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#000"
                                fillRule="evenodd"
                            >
                            </path>
                            </motion.svg>
                        </span>
                    </FeaturedContent>
                    <FeaturedVideo>
                        <video src={require(`../../assests/video6.mp4`)} loop muted autoPlay></video>
                    </FeaturedVideo>
                </Link>
            </Container>
        </FeaturedContentSection>
    )
}

export default HomeFeatured
