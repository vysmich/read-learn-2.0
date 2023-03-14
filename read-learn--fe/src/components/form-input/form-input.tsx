//types
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn
} from 'react-hook-form'
//styles
import './form-input.scss'

interface FormInputProps {
  register: UseFormRegisterReturn
  rest: { type: string; placeholder: string }
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  errorMessage: string
}

export const FormInput = ({
  register,
  rest,
  error,
  errorMessage
}: FormInputProps) => {
  return (
    <div className="form-input">
      <input {...register} {...rest} />
      {error && <span className="form-input__error">{errorMessage}</span>}
    </div>
  )
}
