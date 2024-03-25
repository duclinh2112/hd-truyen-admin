import { IconArrowDown } from '@varum-org/varum-ui/ui'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

import { MENU_ADMIN } from '@/utils/constants/menu'

const Sidebar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [key, setKey] = React.useState<number | null>()

  const handleNavigation = (e: any, path: string) => {
    e.preventDefault()
    if (path) {
      router.push(`${path}`)
    }
  }

  const handleOpenSubMenu = (keyMenu: number, isParentMenu: boolean) => {
    if (isParentMenu) {
      !key || key !== keyMenu ? setKey(keyMenu) : setKey(null)
    }
  }
  return (
    <div className='fixed inset-y-sidebar bottom-0 w-sidebar bg-white '>
      <div className='size-full overflow-y-auto p-4'>
        <div>
          {MENU_ADMIN.map((item, idx) => {
            const pathNameParent = !item.subMenu ? item.path : ''
            const isHasSubMenu = item.subMenu ? true : false
            const isActiveMenu =
              pathname.toString().split('/', 3).join('/') === item.path
            const isActiveSubmenu = key === item.key

            return (
              <div key={idx} className='mb-2'>
                <div>
                  <a
                    href='#'
                    onClick={(e: any) => {
                      handleNavigation(e, pathNameParent.toString())
                      handleOpenSubMenu(item.key, isHasSubMenu)
                    }}
                    className={`relative flex w-full items-center py-3 ${
                      isActiveMenu ? 'text-[#3D5EE1]' : 'text-[#6f6f6f]'
                    }`}
                  >
                    <span className='mr-2 inline-flex size-5 items-center '>
                      {item.icon}
                    </span>
                    <span className='text-[16px]'>{item.title}</span>
                    {item.subMenu && (
                      <span className='absolute right-0 top-[50%] size-3 translate-y-[-50%]'>
                        <IconArrowDown />
                      </span>
                    )}
                  </a>
                </div>
                {item.subMenu &&
                  item.subMenu.length > 0 &&
                  item.subMenu.map((itemSub, idx) => {
                    const isShowMenu = isActiveSubmenu ? 'block' : 'hidden'
                    const isActiveLinkSubmenu = pathname === itemSub.path
                    return (
                      <div key={idx} className={isShowMenu}>
                        <div>
                          <a
                            href='#'
                            onClick={(e: any) => {
                              handleNavigation(e, itemSub.path)
                            }}
                            className={`block p-sub-menu text-[14px] ${
                              isActiveLinkSubmenu
                                ? 'text-[#3D5EE1]'
                                : 'text-[#6f6f6f]'
                            }`}
                          >
                            {itemSub.title}
                          </a>
                        </div>
                      </div>
                    )
                  })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
