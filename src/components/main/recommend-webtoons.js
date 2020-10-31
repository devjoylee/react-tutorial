import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { fetchRecommendWebtoons } from './service'
import { useUserContext } from '../../contexts/user-context'

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
function RecommendWebtoons() {
  const [webtoons, setWebtoons] = useState([])
  const {
    user: { name },
  } = useUserContext()

  useEffect(() => {
    //useEffect의 callback 은 async를 지원하지 않는다 => 별도의 함수 만듬
    async function fetchAndSetWebtoons() {
      const data = await fetchRecommendWebtoons()
      setWebtoons(data)
    }

    fetchAndSetWebtoons()
  }, [])

  if (!webtoons.length) {
    return null
  }

  return (
    <div>
      <div>{name}님을 위한 추천작</div>
      <ScrollContainer>
        {webtoons.map(({ id, title, image, author }) => (
          <WebtoonContainer key={id}>
            <Image src={image} alt="메인이미지" />
            <Title>{title}</Title>
            <Author>{author}</Author>
          </WebtoonContainer>
        ))}
      </ScrollContainer>
    </div>
  )
}

export default RecommendWebtoons
