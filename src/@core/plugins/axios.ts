/* eslint-disable regex/invalid */
import router from '@/router'
import { ApiResponseInterface } from '@core/interfaces/ApiResponseInterface'
import { env } from '@core/utils/env'
import axios, { AxiosResponse } from 'axios'

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: env('VITE_API_BASE_URL', 'https://api.apploxa.com/api'),
  // timeout: 1000,
  headers: {
    'Accept-Language': localStorage.getItem('lang') || 'ar',
    'X-Authorization': env(
      'VITE_X_AUTHORIZATION',
      'EHxHAZcCi8saTCPI4xlpynDvXgSQve4M312uHbJtUuEq2IWmZKnTjSlxSC0OWHwz'
    ),
  },
})

// ℹ️ Add request interceptor to send the authorization header on each subsequent request after login
axiosIns.interceptors.request.use((config) => {
  // Retrieve token from localStorage
  // const token = JwtService.getToken()

  // If token is found
  // if (token) {
  // Get request headers and if headers is undefined assign blank object
  // config.headers = config.headers || {}

  // Set authorization header
  // ℹ️ JSON.parse will convert token to string
  // config.headers.Authorization = token ? `Bearer ${token}` : ''
  // }

  // Return modified config
  return config
})

// ℹ️ Add response interceptor to handle 401 response
axiosIns.interceptors.response.use(
  (response: AxiosResponse<ApiResponseInterface>) => {
    return Promise.resolve(response)
  },
  async (error): Promise<ApiResponseInterface> => {
    // Handle error
    if (error?.response?.status === 401) {
      // ℹ️ Logout user and redirect to login page
      // Remove "userData" from localStorage
      localStorage.removeItem('userData')

      // Remove "accessToken" from localStorage
      localStorage.removeItem('accessToken')
      localStorage.removeItem('userAbilities')

      // If 401 response returned from api
      router.push('/auth/login')
    }
    if (error.response.status === 503) {
      router.push('/under-maintenance') // Redirect to the maintenance page
    }

    return await Promise.reject<ApiResponseInterface>(error)
  }
)

export default axiosIns
