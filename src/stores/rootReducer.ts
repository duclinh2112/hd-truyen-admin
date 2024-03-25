// store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit'

import { api } from '@/services/api/api'

import authReducer from './authSlice'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  // Add more reducers from other features here
  auth: authReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
