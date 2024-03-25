import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

import { useTypedSelector } from '@/stores/configureStore'

import AppContainer from '../AppContainer'

interface AppAuthLayoutProps {
  children: React.ReactNode
}

const AppAuthLayout = ({ children }: AppAuthLayoutProps) => {
  const router = useRouter()
  const { isAuthenticated } = useTypedSelector((state) => state.auth)

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/')
      return
    }
  }, [isAuthenticated])
  return (
    <div className='table h-screen min-h-screen w-full bg-main'>
      <div className='table-cell size-full align-middle'>
        <AppContainer>
          <div className='m-auth flex min-h-0 w-full max-w-[500px] rounded-lg bg-white shadow-auth md:min-h-[300px]'>
            <div className='flex w-full items-center justify-center p-5 md:p-10'>
              <div className='w-full'>{children}</div>
            </div>
          </div>
        </AppContainer>
      </div>
    </div>
  )
}

export default AppAuthLayout
