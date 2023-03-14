//hooks
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//types
import { RootState } from 'store/store'

type Props = {}

export const Home = (props: Props) => {
  const currentUser = useSelector((state: RootState) => state.user.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser === null) {
      navigate('/sign-in')
    }
  }, [currentUser])

  return <div>Home</div>
}
