import React, {useEffect} from 'react'
//styled components
import {MContainer,MContent} from '../../styles/links/merchandiseStyles'
import {Container} from '../../styles/globalStyles'
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'


const SecondMContent = () => {

    const animation = useAnimation()
    const [mContentRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-200px"
    })

    useEffect(() => {
        if(inView) {
            animation.start("visible")
        }
    })

    return (
            <Container>
            <MContainer 
                ref={mContentRef} 
                initial="hidden"
                animate={animation}
                variants={{
                    hidden: {
                        opacity: 0,
                        x: -600
                    },
                    visible: {
                        opacity: 1,
                        x: 0
                    }
                }}
                transition={{
                    duration: 0.6
                }}
            >
                <MContent>
                    <h2>Meet <br/>  
                        The <br/>
                        Neighbors
                    </h2>
                    <p>
                    As New Yorkers, we tend to live our lives without ever really knowing our neighbors. They’re the people we hear through the walls, their voices and clatter above and below. Sometimes, we share intimate moments through these walls: fights and lovemaking, or a baby crying through the night. The smells of dinner drift through doors and commingle in the lobby. Misdirected mail gets slid under a door.
                    </p>
                </MContent>
            </MContainer>
            </Container>
    
    )
}

export default SecondMContent
