import React, {useRef, useEffect} from 'react'
//styled 
import {Banner, Video, Canvas, BannerTitle, Headline} from '../../styles/homeStyles'
//custom hook
import useWindowSize from '../../hooks/useCustomHook'
//context 
import { useGlobalStateContext } from '../../context/globalContext'


const HomeBanner = ({onCursor}) => {
    let canvas = useRef(null)
    const size = useWindowSize()
    const { currentTheme } = useGlobalStateContext()

    useEffect(() => {
        let renderingElement = canvas.current
        let drawingElement = renderingElement.cloneNode()

        let drawingCtx = drawingElement.getContext("2d")
        let renderingCtx = renderingElement.getContext("2d")

        let lastX
        let lastY

        let moving = false

        renderingCtx.globalCompositeOperation = "source-over"
        renderingCtx.fillStyle = currentTheme === "dark" ? "#000000" : "#ffffff"
        renderingCtx.fillRect(0, 0, size.width, size.height)

        renderingElement.addEventListener("mouseover", e => {
            moving = true
            lastX = e.pageX - renderingElement.offsetLeft
            lastY = e.pageY - renderingElement.offsetTop
        })
        renderingElement.addEventListener("mouseup", e => {
            moving = false
            lastX = e.pageX - renderingElement.offsetLeft
            lastY = e.pageY - renderingElement.offsetTop
        })
        renderingElement.addEventListener("mousemove", e => {
            if(moving) {
                drawingCtx.globalCompositeOperation = "source-over"
                renderingCtx.globalCompositeOperation = "destination-out"
                let currentX = e.pageX - renderingElement.offsetLeft
                let currentY = e.pageY - renderingElement.offsetTop
                drawingCtx.lineJoin = "round"
                drawingCtx.moveTo(lastX, lastY)
                drawingCtx.lineTo(currentX, currentY)
                drawingCtx.closePath()
                drawingCtx.lineWidth = 120
                drawingCtx.stroke()
                lastX = currentX
                lastY = currentY
                renderingCtx.drawImage(drawingElement, 0, 0)
            }
        })

    }, [currentTheme, size])

    //Animation for banner
    const parent = {
        initial: {y: 800},
        animate: {
            y: 0,
            transition: {
                staggerChildren: 0.2
            }
        }
    }
    const child = {
        initial: { y: 800 },
        animate: {
            y: 0,
            transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9]
            }
        }
    }

    return (
        <Banner>
            <Video>
                <video
                    height="100%"
                    width="100%"
                    loop
                    muted 
                    autoPlay 
                    src={require(`../../assests/video.mp4`)}></video>
            </Video>
            <Canvas
                ref={canvas}
                width={size.width}
                height={size.height}
                onMouseEnter={() => onCursor("hovered")}
                onMouseLeave={onCursor}
            />
            <BannerTitle variants={parent} initial="initial" animate="animate">
                <Headline variants={child} initial="initial" animate="animate">SASSY</Headline>
                <Headline variants={child} initial="initial" animate="animate">COMFORTS</Headline>
            </BannerTitle>
        </Banner>
    )
}

export default HomeBanner
