import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'

/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(
  error: unknown,
): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error
}

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(
  error: unknown,
): error is { message: string } {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof error.message === 'string'
  )
}

export const isValueInObject = (
  obj: unknown,
  value: string,
): obj is { [key: string]: unknown } => {
  return typeof obj === 'object' && obj != null && value in obj
}

export function isApiError(response: unknown): response is {
  data: { errorType: string; message: string[] }
  status: number
} {
  const isData = isValueInObject(response, 'data')
  if (isData) {
    if (isValueInObject(response.data, 'errorType')) {
      const {
        data: { errorType },
      } = response
      return Boolean(errorType)
    }
  }
  return false
}

export function isApiSuccess(response: unknown): response is {
  data: unknown
} {
  const isData = isValueInObject(response, 'data')
  if (isData) {
    if (isValueInObject(response.data, 'payload')) {
      const {
        data: { payload },
      } = response
      return Boolean(payload)
    }
  }
  return false
}

export function getErrorMessage(response: unknown) {
  if (isApiError(response)) {
    const { data } = response
    return data.message?.length ? data.message[0] : 'Unknown error'
  }
  return 'Unknown error'
}
