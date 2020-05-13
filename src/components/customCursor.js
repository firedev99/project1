import React, { useState, useEffect } from 'react'
//styled
import {Cursor} from '../styles/globalStyles'
//context
import {useGlobalStateContext} from '../context/globalContext'

const CustomCursor = ({toggleMenu}) => {

    const [mousePosition, setMousePosition] = useState({
        x: 300,
        y: 200
    })
    
    const onMouseMove = event => {
        const { pageX: x, pageY: y } = event
        setMousePosition({ x, y })
    }

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove)
        return () => document.removeEventListener("mousemove", onMouseMove)
    }, [])

    const { cursorType } = useGlobalStateContext()
    return (
        <>
        <Cursor
            className={`${!!cursorType ? "hovered" : ""} ${cursorType}`}
            style={{left: `${mousePosition.x}px`, top: `${mousePosition.y}px`}} />
        </>
    )
}

export default CustomCursor
