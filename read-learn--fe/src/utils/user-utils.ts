import { useNavigate } from 'react-router-dom'

export const signIn = async (email: string, password: string) => {
  const response: Response = await fetch(
    'http://localhost:1337/api/auth/local',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: password,
        identifier: email
      })
    }
  )
  return response
}
export const signUp = async (
  email: string,
  password: string,
  userName: string
) => {
  const response: Response = await fetch(
    'http://localhost:1337/api/auth/local/register',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: password,
        identifier: email,
        email: email,
        username: userName
      })
    }
  )
  return response
}
