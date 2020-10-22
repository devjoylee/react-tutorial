import React from 'react'
import Logo from '../components/main/logo'
import NavBtn from '../components/main/nav-btn'
import SearchBox from '../components/main/search-box'

function MainPage() {
  return (
    <>
      <a href="/mypage">
        <NavBtn />
      </a>
      <a href="/">
        <Logo />
      </a>
      <a href="/search">
        <SearchBox />
      </a>
    </>
  )
}

export default MainPage
