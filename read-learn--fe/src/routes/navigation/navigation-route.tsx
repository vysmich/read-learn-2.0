//components
import { Outlet, Link } from 'react-router-dom'
//hooks
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//types
import { RootState } from 'store/store'
//store
import { logOut } from 'store/user/user-slice'
//styles
import './navigation-route.scss'

export const Navigation = () => {
  const user = useSelector((state: RootState) => state.user.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logOut())
    navigate('/sign-in')
  }

  return (
    <>
      <header className="main-nav">
        <nav className="container">
          {user ? (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Log Out</button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/sign-in">Sign In</Link>
              </li>
              <li>
                <Link to="/sign-up">Sign Up</Link>
              </li>
            </ul>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  )
}
