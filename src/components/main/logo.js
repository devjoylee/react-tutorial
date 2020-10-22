import React from 'react'
import styled from 'styled-components'

// const logo = require('../images/logo.png')
const MainLogo = styled.div`
  width: 100%;
  margin: 50px 0;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`

function Logo() {
  return (
    <MainLogo>NAVER{/* <img src={logo} alt="메인페이지 로고" /> */}</MainLogo>
  )
}

export default Logo
