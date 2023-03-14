//components
import { FormInput } from 'components/form-input/form-input'
//hooks
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//types
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { RootState } from 'store/store'
//store
import { signUpRequest } from 'store/user/user-slice'
//styles
import './sign-up-route.scss'

export const SignUp = () => {
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
    reset,
    watch
  } = useForm<FieldValues>()

  // email: 'example@t2ttt.com',
  // password: 'test123456789.'

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { email, password, userName } = data

    dispatch(
      signUpRequest({
        email: email,
        password: password,
        userName: userName
      })
    )
    reset()
  }

  return (
    <div className="sign-up">
      <h1>Registrace</h1>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="sing-up__form">
          <FormInput
            register={{ ...register('userName', { required: true }) }}
            error={errors.userName}
            errorMessage="Zadejte uživatelské jméno"
            rest={{ type: 'text', placeholder: 'Váše uživatelské jméno' }}
          />
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
          <FormInput
            register={{
              ...register(' confirm-password', {
                required: true,
                validate: (val: string) => {
                  if (watch('password') != val) {
                    return 'Hesla se neshodují'
                  }
                }
              })
            }}
            error={errors.password}
            errorMessage="Zadejte heslo"
            rest={{ type: 'password', placeholder: 'Ověření hesla' }}
          />
          <button type="submit">Přihlásit</button>
        </form>
      </div>
    </div>
  )
}
