import { AxiosRequestConfig } from 'axios'

export interface MYRequestInterceptors {
  requestInterceptor?: (config: any) => any
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (err: any) => any
}

export interface MYRequestConfig extends AxiosRequestConfig {
  interceptors?: MYRequestInterceptors
  showLoading?: boolean
}
