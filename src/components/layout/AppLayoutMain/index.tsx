import moment from 'moment'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

import { useTypedSelector } from '@/stores/configureStore'

import AppContainer from '../AppContainer'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

type AppLayoutMainProps = {
  title: string
  children: React.ReactNode
}

const AppLayoutMain = ({ title, children }: AppLayoutMainProps) => {
  const router = useRouter()
  const { isAuthenticated } = useTypedSelector((state) => state.auth)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='ml-main flex min-h-screen flex-col bg-main pt-main'>
        <div className='flex-1'>
          <AppContainer isFluid>
            <div className='py-4'>
              {title && (
                <div className='mb-4 flex items-center justify-between'>
                  <h3 className='text-2xl font-semibold'>{title}</h3>
                </div>
              )}
              <div>{children}</div>
            </div>
          </AppContainer>
        </div>
        <footer className='flex h-14 items-center justify-center bg-white'>
          <AppContainer isFluid>
            HD Truyện &copy; {moment().format('YYYY')}
          </AppContainer>
        </footer>
      </div>
    </div>
  )
}

export default AppLayoutMain
