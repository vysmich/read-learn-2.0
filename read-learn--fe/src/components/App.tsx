//components
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from 'routes/home/home-route'
import { Navigation } from 'routes/navigation/navigation-route'
import { SignIn } from 'routes/sign-in/sign-in-route'
import { SignUp } from 'routes/sign-up/sign-up-route'

function App() {
  return (
    <BrowserRouter>
      <section>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            {/* <Route path="password-reset" element={<PasswordReset />} /> */}
          </Route>
        </Routes>
      </section>
    </BrowserRouter>
  )
}

export default App
