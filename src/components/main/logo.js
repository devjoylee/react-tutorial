import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../images/logo.png'

// const logo = require('../images/logo.png')
const LogoContainer = styled.div`
  margin: 40px 0;
  text-align: center;
  & > img {
    width: 180px;
  }
`

function Logo() {
  return (
    <Link to="/">
      <LogoContainer>
        <img src={logo} alt="메인페이지 로고" />
      </LogoContainer>
    </Link>
  )
}

export default Logo
