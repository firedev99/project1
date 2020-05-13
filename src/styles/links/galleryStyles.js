import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Images = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    top: 6.5rem;
    left: 3rem;
    .gallery {
        .gallery-box {
            overflow: hidden;
            width: 28rem;
            height: 18rem;
            margin: 0.5rem 1rem;
            a {
                img { 
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.95;
                }
            }
        }   
    }
`