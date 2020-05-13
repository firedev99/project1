import React from 'react'
//components 
import Layout from '../components/layout'
import HomeBanner from '../components/homePage/homeBanner'
import HomeContent from '../components/homePage/homeContent'
import HomeFeatured from '../components/homePage/featuredContent'
//context
import {useGlobalStateContext, useGlobalDispatchContext} from '../context/globalContext'


const IndexPage = props => {

  const {cursorStyles} = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({type: "CURSOR_TYPE", cursorType: cursorType})
  }

  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeatured />
    </Layout>
  )
}

export default IndexPage