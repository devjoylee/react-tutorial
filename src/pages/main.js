import React from 'react'
import Logo from '../components/main/logo'
import NavBtn from '../components/main/nav-btn'
import SearchBox from '../components/main/search-box'
import Webtoons from '../components/main/webtoon'
import RecommendWebtoons from '../components/main/recommend-webtoons'

function MainPage() {
  return (
    <>
      <NavBtn />
      <Logo />
      <SearchBox />
      <Webtoons />
      <RecommendWebtoons />
    </>
  )
}

export default MainPage
