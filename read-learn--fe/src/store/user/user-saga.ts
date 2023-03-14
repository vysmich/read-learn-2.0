import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeLatest } from 'redux-saga/effects'
import { signIn, signUp } from 'utils/user-utils'
import {
  signInRequest,
  signInSuccess,
  signInFailure,
  User,
  signUpSuccess,
  signUpFailure,
  signUpRequest
} from './user-slice'

function* signInStart(
  action: PayloadAction<{ email: string; password: string }>
) {
  const { email, password } = action.payload
  try {
    const response: Response = yield call(signIn, email, password)
    const user: User = yield response.json()

    if (!response.ok) {
      throw user.error
    }
    yield put(signInSuccess(user))
  } catch (error) {
    yield put(signInFailure(error))
  }
}

function* signUpStart(
  action: PayloadAction<{ email: string; password: string; userName: string }>
) {
  const { email, password, userName } = action.payload
  try {
    const response: Response = yield call(signUp, email, password, userName)
    const user: User = yield response.json()

    if (!response.ok) {
      throw user.error
    }
    yield put(signUpSuccess(user))
  } catch (error) {
    yield put(signUpFailure(error))
  }
}

export function* userSaga() {
  yield takeLatest(signInRequest.type, signInStart)
  yield takeLatest(signUpRequest.type, signUpStart)
}
