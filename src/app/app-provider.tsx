'use client'
import { PaxUIProvider } from '@varum-org/varum-ui/core'
import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from '@/stores/configureStore'

interface AppProviderProps {
  children: React.ReactNode
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <Suspense fallback={'loading'}>
      <PaxUIProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {/* <I18nextProvider i18n={i18n}>{children}</I18nextProvider> */}
            {children}
          </PersistGate>
        </Provider>
      </PaxUIProvider>
    </Suspense>
  )
}
