import { createSlice, Slice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserData {
  jwt: string
  user: {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    about: string
    created_at: string
    linkedin_username: string
    github_username: string
    twitter_username: string
  }
  error: any
}
export interface User {
  jwt: string
  user: {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    about: string
    created_at: string
    linkedin_username: string
    github_username: string
    twitter_username: string
  }
  error: any
}

export interface CounterState {
  user: null | User
  isLoading: boolean
  error: any
}

const initialState: CounterState = {
  user: null,
  isLoading: false,
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInRequest: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.isLoading = true
    },
    signInSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isLoading = false
    },
    signInFailure: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = action.payload
    },
    signUpRequest: (
      state,
      action: PayloadAction<{
        email: string
        password: string
        userName: string
      }>
    ) => {
      state.isLoading = true
    },
    signUpSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isLoading = false
    },
    signUpFailure: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = action.payload
      console.log(action.payload.details)
      alert()
    },
    logOut: (state) => {
      state.user = null
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  signInRequest,
  signInSuccess,
  signInFailure,
  signUpRequest,
  signUpFailure,
  signUpSuccess,
  logOut
} = userSlice.actions

export default userSlice.reducer
