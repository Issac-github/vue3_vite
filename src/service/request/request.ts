import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'

import { message } from 'ant-design-vue'
// import { MessageInstance } from 'ant-design-vue/es/message'
import 'ant-design-vue/es/message/style/css' //vite只能用 ant-design-vue/es 而非 ant-design-vue/lib

import { Interceptor, RequestConfig } from './type'

class Request {
  config: AxiosRequestConfig
  interceptor?: Interceptor
  instance: AxiosInstance
  showLoading: boolean
  // loading?: MessageInstance

  constructor(options: RequestConfig) {
    this.config = options

    this.showLoading = options.showLoading ?? true

    this.interceptor = options.interceptor
    this.instance = axios.create(options)

    this.setInterceptor()
  }

  setInterceptor(): void {
    this.instance.interceptors.request.use(
      this.interceptor?.requestInterceptor,
      this.interceptor?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptor?.responseInterceptor,
      this.interceptor?.responseInterceptorCatch
    )
    // 传参interceptor, 构造局部拦截器

    this.instance.interceptors.request.use((config) => {
      if (this.showLoading) {
        message.loading({
          content: 'loading'
        })
      }
      return config
    })
    this.instance.interceptors.response.use(
      (res) => {
        message.success({ content: 'Loaded!' })
        return res
      },
      (err) => {
        message.success({ content: 'Loaded!' })
        return err
      }
    )
    // 全局拦截器
  }

  request<T>(config: RequestConfig): Promise<T> {
    if (!config.showLoading) {
      this.showLoading = false
    }
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
          this.showLoading = true
        })
        .catch((err) => {
          reject(err)
          this.showLoading = true
        })
    })
  }

  get<T>(config: RequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: RequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  delete<T>(config: RequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  patch<T>(config: RequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }
}

export default Request
