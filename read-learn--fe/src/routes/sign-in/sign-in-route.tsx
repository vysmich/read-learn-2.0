//componenst
import { FormInput } from 'components/form-input/form-input'
//hooks
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//types
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { RootState } from 'store/store'
//store
import { signInRequest } from 'store/user/user-slice'

import './sign-in-route.scss'

export const SignIn = () => {
  const currentUser = useSelector((state: RootState) => state.user.user)

  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser !== null) {
      navigate('/')
    }
  }, [currentUser])

  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FieldValues>()

  // email: 'example@t2ttt.com',
  // password: 'test123456789.'

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { email, password } = data

    dispatch(
      signInRequest({
        email: email,
        password: password
      })
    )
    reset()
  }

  return (
    <div className="sign-in">
      <h1>Přihlášení</h1>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="sing-in__form">
          <FormInput
            register={{ ...register('email', { required: true }) }}
            error={errors.email}
            errorMessage="Email musí být ve správném formátu"
            rest={{ type: 'email', placeholder: 'Váš email' }}
          />
          <FormInput
            register={{ ...register('password', { required: true }) }}
            error={errors.password}
            errorMessage="Zadejte heslo"
            rest={{ type: 'password', placeholder: 'Vaše heslo' }}
          />
          <button type="submit">Přihlásit</button>
        </form>
      </div>
    </div>
  )
}
