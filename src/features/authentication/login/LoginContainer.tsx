import React from 'react'

import { setIsAuthenticated } from '@/stores/authSlice'
import { useAppDispatch } from '@/stores/configureStore'
import type { ILoginRequest } from '@/utils/types/interfaces/request/ILoginRequest'

import Login from './Login'

const LoginContainer = () => {
  const dispatch = useAppDispatch()

  const handleLogin = (credentials: ILoginRequest) => {
    if (
      credentials.email === 'admin@gmail.com' &&
      credentials.password === '123456'
    ) {
      dispatch(setIsAuthenticated(true))
    }
  }

  return <Login onLogin={handleLogin} />
}

export default LoginContainer
