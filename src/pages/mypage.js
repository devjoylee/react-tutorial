import React from 'react'
import { useHistory } from 'react-router-dom'
import { useUserContext } from '../contexts/user-context'

function MyPage() {
  const { user, setUser } = useUserContext()
  const history = useHistory()

  if (!user) {
    return null
  }

  const { id, name } = user

  const handleLogOut = () => {
    // 1. context user 를 null로 변경
    // 2. localStorage user 지워야함
    // 3. history replace /

    setUser(null)
    history.replace('/')
  }

  return (
    <div>
      MyInfo Page
      <h2>아이디 : {id}@naver.com</h2>
      <h2>이름 : {name}</h2>
      <button onClick={handleLogOut}>로그아웃</button>
    </div>
  )
}

export default MyPage
