import request from '@/utils/request'

export const getAdressList = () => {
  return request.get('/address/list')
}
