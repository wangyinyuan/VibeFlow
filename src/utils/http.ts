import { RealIp } from './../types/realIP.d'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import type { AxiosRequestConfig } from 'axios'

const httpInstance = axios.create({
  baseURL: 'https://netease-cloud-music-api-liard-mu-78.vercel.app/',
  timeout: 5000,
  withCredentials: true
})

//获取用户的真实IP
let realIP: string
axios
  .get<RealIp>('https://api.ipify.org?format=json')
  .then(res => {
    realIP = res.data.ip
  })
  .catch(error => {
    console.error('Error occurred: ', error)
  })
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

export function request<T = any>(config: AxiosRequestConfig): Promise<T> {
  return httpInstance(config) as Promise<T>
}
