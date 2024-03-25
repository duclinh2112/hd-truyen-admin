'use client'

import IconArrowDown from '@assets/icons/IconArrowDown'
import IMAGE_PROFILE_DEFAULT from '@assets/images/profile-img.jpg'
import { Image } from '@varum-org/varum-ui/ui'
import { useClickOutside } from '@varum-org/varum-ui/utils'
import React from 'react'

import { setIsAuthenticated } from '@/stores/authSlice'
import { useAppDispatch } from '@/stores/configureStore'

const Profile = () => {
  const dispatch = useAppDispatch()
  const wrapRef = React.useRef<HTMLDivElement>(null)
  const [isShowPopup, setIsShowPopup] = React.useState<boolean>(false)
  useClickOutside({
    ref: wrapRef,
    handler: () => setIsShowPopup(false),
  })

  const handleLogout = () => {
    dispatch(setIsAuthenticated(false))
  }

  return (
    <div>
      <div ref={wrapRef} className='relative cursor-pointer'>
        <div
          className='flex items-center '
          onClick={() => setIsShowPopup(!isShowPopup)}
        >
          <div>
            <Image
              src={IMAGE_PROFILE_DEFAULT.src}
              className='size-10 rounded-full border-[2px] border-solid border-[#E6E6E6] p-[2px]'
              alt=''
              objectFit='contain'
            />
          </div>
          <div className='ml-1 flex flex-col'>
            <span className='text-[14px] font-semibold'>Admin</span>
            <span className='text-[12px] font-semibold text-primary'>
              admin
            </span>
          </div>
          <div>
            <span className='ml-2 inline-block size-3'>
              <IconArrowDown />
            </span>
          </div>
        </div>
        {isShowPopup && (
          <div className='absolute right-0 top-[50px] min-w-[200px] rounded-[3px] border-[1px] border-solid border-default bg-white'>
            <div className='group border-b border-solid border-default px-[15px] py-[10px] transition-all hover:bg-[#e9ecef]'>
              <span className='text-[14px] text-[#212529] group-hover:text-[#3D5EE1]'>
                Tài khoản
              </span>
            </div>
            <div
              className='group px-[15px] py-[10px] transition-all hover:bg-[#e9ecef]'
              onClick={handleLogout}
            >
              <span className='text-[14px] text-[#212529] group-hover:text-[#3D5EE1]'>
                Đăng xuất
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
