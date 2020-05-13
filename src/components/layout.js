import React, { useState } from "react"
import PropTypes from "prop-types"
//styled
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'
//components
import Header from './Header'
import Cursor from './customCursor'
import Navigation from './navigation'
//context
import {useGlobalStateContext, useGlobalDispatchContext} from '../context/globalContext'
//fonts 
import LogoFontWoff from '../fonts/permanentmarker-regular-webfont.woff'
import LogoFontWoff2 from '../fonts/permanentmarker-regular-webfont.woff2'

const Layout = ({ children }) => {
  const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      cursor: none;
    }
    html {
      font-size: 16px;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }
    ::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
    body {
      background: ${props => props.theme.background};
      scroll-behavior: none;
      overflow-x: none;
      transition: all 0.4s ease-in-out;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    @font-face {
      font-family: 'Permanent Marker';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Permanent Marker Regular'), local('PermanentMarker-Regular'), 
      url(${LogoFontWoff2}) format('woff2'),
      url(${LogoFontWoff}) format('woff');
  }
  `
  const darkTheme = {
    background: "#000000",
    text: "#ffffff",
    red: "#ea291e"
  }
  const lightTheme = {
    background: "#ffffff",
    text: "#000000",
    red: "#ea291e"
  }
  
  const {currentTheme, cursorStyles} = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({type: "CURSOR_TYPE", cursorType: cursorType})
  }

  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
      <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Cursor toggleMenu={toggleMenu} />
        <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} onCursor={onCursor} />
        <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} onCursor={onCursor} />
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
