import React, {useEffect} from 'react'
//styled
import {Container} from '../../styles/globalStyles'
import {HomeContentSection, Content} from '../../styles/homeStyles'
//intersection
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'


const HomeContent = () => {
    const animation = useAnimation()
    const [contentRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-200px"
    })

    useEffect(() => {
        if(inView) {
            animation.start("visible")
        }
    }, [animation, inView])
    return (
        <HomeContentSection
        ref={contentRef}
        initial="hidden"
        animate={animation}
        variants={{
            hidden: {
                y: 72,
                opacity: 0
            },
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.7,
                    ease: [0.6, 0.05, -0.01, 0.9]
                }
            }
        }}
        >
            <Container>
                <Content>
                    <h3>Victor Glemaud's New Collection Introduces Curve Sizing - </h3>
                    <p>The collection features Glemaud's signature cut-out knits, including an iteration of Graham's dress in a fire red shade, plus a camel trench coat, and a colorblock sweater. Pre-order your favorites from the collection.</p>
                </Content>
            </Container>
        </HomeContentSection>
    )
}

export default HomeContent
