import Request from './request/request'
import { API_BASE_URL, TIME_OUT } from './request/config'
// import type { AxiosRequestHeaders } from 'axios'

// import localCache from '@/utils/cache'

const reuqest = new Request({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT,
  interceptor: {
    requestInterceptor: (config) => {
      // const token = localCache.getCache('token')
      // if (token) {
      //   // (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`
      //   config.headers!.Authorization = `Bearer ${token}`
      // }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default reuqest
