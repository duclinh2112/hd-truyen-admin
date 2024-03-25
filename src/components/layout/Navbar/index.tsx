import React from 'react'

import Messenger from './ui/Messenger'
import Notification from './ui/Notification'
import Profile from './ui/Profile'

const Navbar = () => {
  return (
    <div className='fixed left-0 top-0 z-10 h-header w-full bg-white shadow-header'>
      <div className='flex size-full items-center justify-between'>
        <div className='relative flex h-full w-sidebar items-center bg-primary p-4'>
          <div className='flex h-full items-center'>
            <a href='/'>
              <h2 className='text-4xl uppercase text-white'>HD Truyện</h2>
            </a>
          </div>
        </div>
        <div className='flex items-center gap-4 px-8'>
          <Messenger />
          <Notification />
          <Profile />
        </div>
      </div>
    </div>
  )
}

export default Navbar
