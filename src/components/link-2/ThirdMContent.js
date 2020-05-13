import React,{useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import {motion,useAnimation} from 'framer-motion'
//styled components
import {Container} from '../../styles/globalStyles'
import {ThirdContent, MList} from '../../styles/links/merchandiseStyles'

const ThirdMContent = () => {
    const animation = useAnimation()
    const [listRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-200px"
    })

    useEffect(() => {
        if(inView) {
            animation.start("visible")
        }
    })

    const container = {
        hidden: {
            x: 200,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                when: "beforeChildren",
                staggerChilren: 0.1,
                ease: [0.5, 0.05, -0.01, 0.9]
            }
        }
    }

    const item = {
        hidden: {
            y: 100, 
            opacity: 0
        },
        visible: {
            y: 0,
            delay: 0.4,
            opacity: 1,
            ease: [0.5, 0.05, -0.01, 0.9]
        }
    }
    return (
        <Container>
            <ThirdContent>
                <MList
                    ref={listRef}
                    initial="hidden"
                    animate={animation}
                    variants ={container}
                >
                    <div className="flex-1">
                        <li className="city">Banani, Dhaka <span>We Believe in Quality</span></li>
                        <li className="city">Gulshan, Dhaka <span>Reveal YOURSELF</span></li>
                        <li className="city">Bashundhara, Dhaka <span>We put EFFORT</span></li>
                        <li className="city">Dhanmondi, Dhaka <span>Visionary Era</span></li>
                        <li className="city">Uttara, Dhaka <span>Nobody like us</span></li>
                    </div>
                    <div className="flex-2">
                        <motion.li variants={item} className="city">Mirpur, Dhaka <span>Just Try US</span></motion.li>
                        <motion.li variants={item} className="city">Noakhali, Bangladesh</motion.li>
                        <motion.li variants={item} className="city">Barisal, Bangladesh <span>We CREATE</span></motion.li>
                        <motion.li variants={item} className="city">Chittagong, Bangladesh</motion.li>
                        <motion.li variants={item} className="city">Cox's Bazar, Bangladesh</motion.li>
                    </div>
                </MList>
            </ThirdContent>
        </Container>
    )
}

export default ThirdMContent
