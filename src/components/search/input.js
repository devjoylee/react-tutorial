import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px;
  border-bottom: 2px solid #1fcf89;
`

const Icon = styled.span`
  font-size: 30px;
  cursor: pointer;
`
const Input = styled.input`
  margin: 0;
  padding-left: 10px;
  width: 100%;
  font-size: 22px;
  font-weight: bold;
  color: #888;
  border: none;
  &:focus {
    outline: none;
  }
`

function SearchInput() {
  return (
    <SearchContainer>
      <Link to="/">
        <Icon>👈</Icon>
      </Link>
      <Input type="text" placeholder="검색어를 입력해주세요" />
      <Icon>🔍</Icon>
    </SearchContainer>
  )
}

export default SearchInput
