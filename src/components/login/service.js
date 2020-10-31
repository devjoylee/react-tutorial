export const fetchLogin = async ({ id, password }) => {
  const response = await fetch('http://localhost:8888/users') // http 요청 (비동기)

  if (response.ok) {
    const users = await response.json()

    console.log(users)
  }

  return null
}
