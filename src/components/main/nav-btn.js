import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 20px 0;
`

const NavBar = styled.div`
  width: 25px;
  height: 1px;
  margin-top: 8px;
  background-color: #535353;
`

function NavBtn() {
  return (
    <Container>
      <NavBar />
      <NavBar />
      <NavBar />
    </Container>
  )
}

export default NavBtn
