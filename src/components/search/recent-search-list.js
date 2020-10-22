import React from 'react'
import styled from 'styled-components'

const ListContainer = styled.div`
  padding: 15px;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  & > p {
    margin: 0;
  }
  & > p:last-child {
    color: #999;
    cursor: pointer;
  }
`

const History = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  & > p {
    font-size: 20px;
    margin: 0;
  }
  & > button {
    background: none;
    border: none;
    padding: 0 7px;
    font-size: 14px;
    border: 1px solid #1fcf89;
    border-radius: 20px;
    color: #1fcf89;
    cursor: pointer;
  }
  & > button:focus {
    outline: none;
  }
`

function RecentSearchList() {
  return (
    <ListContainer>
      <Title>
        <p>최근 검색어</p>
        <p>전체삭제</p>
      </Title>
      <History>
        <p>아이유</p>
        <button>삭제</button>
      </History>
      <History>
        <p>금요일에 만나요</p>
        <button>삭제</button>
      </History>
    </ListContainer>
  )
}
export default RecentSearchList
