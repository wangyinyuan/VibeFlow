import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { RealIp } from './../types/realIP.d'

const httpInstance = axios.create({
  baseURL: 'https://netease-cloud-music-api-liard-mu-78.vercel.app/',
  timeout: 5000,
  withCredentials: true
})
async function setupInterceptors() {
  //获取用户的真实IP
  let realIP: string
  try {
    const res = await axios.get<RealIp>('https://api.ipify.org?format=json')
    realIP = res.data.ip
  } catch (error) {
    console.error('Error occurred: ', error)
    realIP = '163.123.192.53'
  }
  //请求拦截器
  httpInstance.interceptors.request.use(
    config => {
      config.params.realIP = realIP
      return config
    },
    e => {
      return Promise.reject(e)
    }
  )
  //响应拦截器
  httpInstance.interceptors.response.use(
    response => {
      return response.data
    },
    error => {
      ElMessage({
        type: 'error',
        message: error.response.data.message,
        duration: 2000
      })
      return Promise.reject(error)
    }
  )
}

setupInterceptors()

export function request<T = any>(config: AxiosRequestConfig): Promise<T> {
  return httpInstance(config) as Promise<T>
}
