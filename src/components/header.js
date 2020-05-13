import React, {useEffect} from 'react'
//styled Components
import { Container, Flex } from '../styles/globalStyles'
import { HeaderNav, Logo, Menu } from '../styles/HeaderStyles'
import { Link } from 'gatsby'
//context
import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext'

const Header = ({onCursor, toggleMenu, setToggleMenu}) => {
    const { currentTheme } = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()

    const toggleTheme = () => {
        if(currentTheme === "dark") {
            dispatch({type: "TOGGLE_THEME", theme: "light"})
        } else {
            dispatch({type: "TOGGLE_THEME", theme: "dark"})
        }
    }

    useEffect(() => {
        window.localStorage.setItem("theme", currentTheme)
    }, [currentTheme])

    return (
        <>
            <HeaderNav
                initial={{y: -72, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9]}}
            >
                <Container fluid>
                    <Flex spaceBetween noHeight>
                        <Logo
                            onMouseEnter={() => onCursor("hovered")}
                            onMouseLeave={onCursor}
                        >
                            <Link>
                                FASHI
                            </Link>
                            <span
                                onClick={toggleTheme}
                                onKeyPress={toggleTheme}
                                onMouseEnter={() => onCursor("pointer")}
                                onMouseLeave={() => onCursor("hovered")}
                            >
                            </span>
                            <Link>
                                N
                            </Link>
                        </Logo>
                        <Menu
                            onClick={() => setToggleMenu(!toggleMenu)}
                            onMouseEnter={() => onCursor("pointer")}
                            onMouseLeave={onCursor}
                        >
                            <button>
                                <span></span>
                                <span></span>
                            </button>
                        </Menu>
                    </Flex>
                </Container>
            </HeaderNav>
        </>
    )
}

export default Header
