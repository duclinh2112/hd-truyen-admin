import moment from 'moment'

import { DATE_FORMAT } from '../constants'

export const formatDate = (date: string | Date | null) => {
  if (!date) return ''
  return moment(date).format(DATE_FORMAT)
}
