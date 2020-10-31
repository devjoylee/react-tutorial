import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { fetchWebtoons } from './service'

const ScrollContainer = styled.div`
  padding: 20px;
  white-space: nowrap;
  overflow-x: auto;
`

const WebtoonContainer = styled.div`
  display: inline-block;
  width: 45%;
  border-radius: 5px;

  &:not(:last-child) {
    margin-right: 15px;
  }
`
const Image = styled.img`
  width: 100%;
  vertical-align: top;
`
const Title = styled.div`
  margin-top: 9px;
  font-weight: bold;
`
const Author = styled.div`
  color: #797b84;
  margin-top: 4px;
  font-size: 14px;
`
function Webtoons() {
  const [webtoons, setWebtoons] = useState([])

  useEffect(() => {
    //useEffect의 callback 은 async를 지원하지 않는다 => 별도의 함수 만듬
    async function fetchAndSetWebtoons() {
      const data = await fetchWebtoons()
      setWebtoons(data)
    }

    fetchAndSetWebtoons()
  }, [])

  if (!webtoons.length) {
    return null
  }

  return <ScrollContainer></ScrollContainer>
}

export default Webtoons
