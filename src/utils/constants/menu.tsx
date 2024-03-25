import IconBookOpen from '@assets/icons/IconBookOpen'
import IconClipboardList from '@assets/icons/IconClipboardList'
import IconGrid from '@assets/icons/IconGrid'
import IconMedia from '@assets/icons/IconMedia'
import IconTeacher from '@assets/icons/IconTeacher'
import IconUserHouse from '@assets/icons/IconUserHouse'
import { IconTicket } from '@varum-org/varum-ui/ui'

import type { IMenuItem } from '../types/interfaces/IMenuItem'
import { ROUTE_PATH } from './route'

export const MENU_ADMIN: IMenuItem[] = [
  {
    key: 1,
    title: 'Dashboard',
    path: ROUTE_PATH.admin.dashboard,
    icon: <IconGrid />,
  },
  {
    key: 2,
    title: 'Thư viện hình ảnh',
    path: ROUTE_PATH.admin.mediaLibrary,
    icon: <IconMedia />,
  },
  {
    key: 3,
    title: 'Quản lý người dùng',
    path: ROUTE_PATH.admin.user.user,
    icon: <IconUserHouse />,
  },
  {
    key: 4,
    title: 'Danh mục chuyên mục',
    path: ROUTE_PATH.admin.categories.categories,
    icon: <IconClipboardList />,
    subMenu: [
      {
        key: 1,
        title: 'Tất cả danh mục',
        path: ROUTE_PATH.admin.categories.all,
      },
      {
        key: 2,
        title: 'Thêm danh mục mới',
        path: ROUTE_PATH.admin.categories.add,
      },
    ],
  },
  {
    key: 5,
    title: 'Danh sách tag',
    path: ROUTE_PATH.admin.tags.tags,
    icon: <IconTicket color='currentColor' />,
    subMenu: [
      {
        key: 1,
        title: 'Tất cả tag',
        path: ROUTE_PATH.admin.tags.all,
      },
      {
        key: 2,
        title: 'Thêm tag mới',
        path: ROUTE_PATH.admin.tags.add,
      },
    ],
  },
  {
    key: 6,
    title: 'Danh sách tác giả',
    path: ROUTE_PATH.admin.author.author,
    icon: <IconTeacher />,
    subMenu: [
      {
        key: 1,
        title: 'Tất cả tác giả',
        path: ROUTE_PATH.admin.author.all,
      },
      {
        key: 2,
        title: 'Thêm tác giả mới',
        path: ROUTE_PATH.admin.author.add,
      },
    ],
  },
  {
    key: 7,
    title: 'Danh sách truyện',
    path: ROUTE_PATH.admin.stories.stories,
    icon: <IconBookOpen />,
    subMenu: [
      {
        key: 1,
        title: 'Tất cả truyện',
        path: ROUTE_PATH.admin.stories.all,
      },
      {
        key: 2,
        title: 'Thêm truyện mới',
        path: ROUTE_PATH.admin.stories.add,
      },
    ],
  },
]
