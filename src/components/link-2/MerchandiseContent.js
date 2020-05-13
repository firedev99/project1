import React, {useState} from 'react'
import {motion} from 'framer-motion'
//styled component
import {ContentVideo, HeaderContent, OutletVideo, MerchandiseTitle} from '../../styles/links/merchandiseStyles'

const MerchandiseContent = () => {
   const [hovered, setHovered] = useState(false)

    return (
        <ContentVideo
            initial={{x: 800, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
                delay: 0.2,
                duration: 1,
                ease: [0.6,0.05,-0.01,0.9]
            }}
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
        >
            <HeaderContent
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    delay: 1,
                    duration: 0.6,
                    ease: [0.6,0.05,-0.01,0.9]
                }}
            >
                <h3>Merchandise Outlet</h3>
                <motion.div
                    animate={{opacity: hovered ? 1 :0 }}
                className="hovered">
                    <span>Banani,Dhaka</span>
                    <span>Bangladesh</span>
                </motion.div>
            </HeaderContent>
            <OutletVideo>
                <video src={require(`../../assests/video-outlet.mp4`)} loop autoPlay muted></video>
            </OutletVideo>
            <MerchandiseTitle
                initial={{y: 800, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{
                    duration: 0.7,
                    delay: 1.3,
                    ease: [0.6,0.05,-0.01,0.9]
                }}
            >
                Provides <br/>
                Premium, Quality
            </MerchandiseTitle>
        </ContentVideo>
    )
}

export default MerchandiseContent
