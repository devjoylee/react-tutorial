import React from 'react'
import Logo from '../components/main/logo'
import NavBtn from '../components/main/nav-btn'
import SearchBox from '../components/main/search-box'
import Webtoons from '../components/main/webtoon'
import RecommendWebtoons from '../components/main/recommend-webtoons'
import { useUserContext } from '../contexts/user-context'

function MainPage() {
  const { user } = useUserContext()

  return (
    <>
      <NavBtn />
      <Logo />
      <SearchBox />
      <Webtoons />
      {user && <RecommendWebtoons />}
    </>
  )
}

export default MainPage
