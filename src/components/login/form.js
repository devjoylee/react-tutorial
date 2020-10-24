import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
`

function Form() {
  const [formValues, setFormValues] = useState({
    id: '',
    password: '',
  })

  const { id, password } = formValues

  const handleFormValues = ({ target: { id, value } }) => {
    setFormValues({
      ...formValues,
      [id]: value,
    })
  }

  return (
    <Container>
      <Input
        id="id"
        value={id}
        placeholder="아이디를 입력해주세요"
        onChange={handleFormValues}
      />
      <Input
        id="password"
        value={password}
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={handleFormValues}
      />
      <Button>로그인</Button>
    </Container>
  )
}

export default Form
