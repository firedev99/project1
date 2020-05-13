import React from 'react'
import { Link } from 'gatsby'
import {motion} from 'framer-motion'
//styled
import {Images} from '../../styles/links/galleryStyles'



const images = [
    {
        id: 1,
        img: "gallery-1.jpg",
        path: "image-1"
    },
    {
        id: 2,
        img: "gallery-2.jpg",
        path: "image-2"
    },
    {
        id: 3,
        img: "gallery-3.jpg",
        path: "image-3"
    },
    {
        id: 4,
        img: "gallery-4.jpg",
        path: "image-4"
    },
    {
        id: 5,
        img: "gallery-5.jpg",
        path: "image-5"
    },
    {
        id: 6,
        img: "gallery-6.jpg",
        path: "image-6"
    }
]
//FramerAnimations 
const transition = {
    duration: 0.5,
    ease: [0.6, 0.05, -0.01, 0.9]
}
const frameVariants = {
    hover: {scale: 0.95}
}
const imageVariants = {
    hover: {scale: 1.5}
}

const parent = {
    inital: {
        x: 1000,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
            ease: [0.6, 0.05, -0.01, 0.9]
        }
    }
}

const GalleryContainer = () => {
    return (
        <Images variants={parent} initial="inital" animate="animate">
            {images.map(image => (
                <motion.div key={image.id} className="gallery">
                    <motion.div 
                        whileHover="hover"
                        variants={frameVariants}
                        transition={transition}
                        className="gallery-box"
                    >
                        <Link>
                            <motion.img 
                                whileHover="hover"
                                variants={imageVariants}
                                transition={transition}
                                src={require(`../../assests/img/${image.img}`)} alt="Gallery-Showcase"
                            />
                        </Link>
                    </motion.div>
                </motion.div>
            ))}
        </Images>
    )
}

export default GalleryContainer
