// services/api.ts
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { notify } from '@varum-org/varum-ui/utils'

import { EErrorType } from '@/utils/types/enum/EErrorType'

const baseQuery = fetchBaseQuery({
  baseUrl: ``,
  // prepareHeaders: (headers, { getState }) => {
  //   // By default, if we have a token in the store, let's use that for authenticated requests
  //   const { token } = (getState() as RootState).auth

  //   if (token) {
  //     headers.set('Authorization', `Bearer ${token}`)
  //   }
  //   return headers
  // },
})

const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result: any = await baseQuery(args, api, extraOptions)

  if (
    [
      EErrorType.ACCESS_TOKEN_EXPIRED,
      EErrorType.UNAUTHORIZED,
      EErrorType.INVALID_TOKEN,
    ].includes(result?.data?.errorType)
  ) {
    api.dispatch({ type: 'auth/logout' })
  }

  if (api.type === 'mutation') {
    if (result?.data?.errorType) {
      const message = result?.data?.message || []
      const errMessage =
        message && message.length
          ? message[0]
          : 'Có lỗi xảy ra, vui lòng thử lại sau'
      notify.show({
        message: errMessage,
        type: 'error',
      })
    }
  }
  return result
}

export const api = createApi({
  /**
   * `reducerPath` is optional and will not be required by most users.
   * This is useful if you have multiple API definitions,
   * e.g. where each has a different domain, with no interaction between endpoints.
   * Otherwise, a single API definition should be used in order to support tag invalidation,
   * among other features
   */
  reducerPath: 'splitApi',
  /**
   * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
   */
  baseQuery: customBaseQuery,
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: [
    'Auth',
    'Orders',
    'Categories',
    'Coupons',
    'Users',
    'Settings',
    'Assets',
    'Products',
  ],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: () => ({}),
})
