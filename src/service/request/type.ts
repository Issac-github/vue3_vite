import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface Interceptor {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any

  responseInterceptor?: (response: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}

export interface RequestConfig extends AxiosRequestConfig {
  interceptor?: Interceptor
  showLoading?: boolean
}
