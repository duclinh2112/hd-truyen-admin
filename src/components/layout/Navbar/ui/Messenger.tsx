'use client'

import IconCommentDot from '@assets/icons/IconCommentDot'
import { Image } from '@varum-org/varum-ui/ui'
import { useClickOutside } from '@varum-org/varum-ui/utils'
import React from 'react'

const Messenger = () => {
  const wrapRef = React.useRef<HTMLDivElement>(null)
  const [isShowPopup, setIsShowPopup] = React.useState<boolean>(false)
  useClickOutside({
    ref: wrapRef,
    handler: () => setIsShowPopup(false),
  })

  return (
    <div>
      <div ref={wrapRef} className='relative cursor-pointer'>
        <div
          className='flex size-10 items-center justify-center rounded-full bg-[#F7F7FA]'
          onClick={() => setIsShowPopup(!isShowPopup)}
        >
          <div className='w-[18px]'>
            <IconCommentDot />
          </div>
        </div>
        {isShowPopup && (
          <div className='absolute right-[-50px] top-[50px] min-w-[350px] rounded-[3px] border-[1px] border-solid border-default bg-white'>
            <div className='flex h-10 w-full items-center justify-between border-b border-solid border-[#eee] px-[15px]'>
              <span className='font-bold text-[#333]'>Chat</span>
            </div>
            <div className='max-h-[300px] w-full overflow-y-auto'>
              <div>
                <div className='flex border-b border-solid border-[#eee] px-[15px] py-[10px] hover:bg-[#fafafa]'>
                  <div className='size-10 rounded-full'>
                    <Image
                      src='https://www.radiustheme.com/demo/html/psdboss/akkhor/akkhor/img/figure/student11.png'
                      alt='Avatar'
                    />
                  </div>
                  <div className='ml-[10px] flex-1'>
                    <div className='mb-1 flex items-center justify-between'>
                      <h3 className='text-[14px] font-bold text-[#333]'>
                        Đức Linh
                      </h3>
                      <span className='text-[14px] text-[#848484]'>18:30</span>
                    </div>
                    <div>
                      <p className='cursor-text text-[14px] text-[#646464]'>
                        What is the reason of buy this item. Is it usefull for
                        me
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex h-10 w-full items-center justify-center border-t border-solid border-[#eee] px-[15px]'>
              <span className='text-[14px] text-[#333]'>
                Xem tất cả tin nhắn
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Messenger
