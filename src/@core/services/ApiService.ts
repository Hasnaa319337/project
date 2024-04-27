import router from '@/router'
import { ApiResponseInterface } from '@core/interfaces/ApiResponseInterface'
import { env } from '@core/utils/env'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import type { App } from 'vue'
import VueAxios from 'vue-axios'

/**
 * @description service to call HTTP request via Axios
 */
class ApiService {
  /**
   * @description property to share vue instance
   */
  public static vueInstance: App

  /**
   * @description initialize vue axios
   */
  public static init(app: App<Element>) {
    ApiService.vueInstance = app
    ApiService.vueInstance.use(VueAxios, axios)
    ApiService.vueInstance.axios.defaults.baseURL = env(
      'VITE_API_BASE_URL',
      'https://api.apploxa.com/api'
    )
    ApiService.vueInstance.axios.defaults.headers.common['X-Authorization'] =
      env(
        'VITE_X_AUTHORIZATION',
        'EHxHAZcCi8saTCPI4xlpynDvXgSQve4M312uHbJtUuEq2IWmZKnTjSlxSC0OWHwz'
      )

    axios.interceptors.request.use((config) => {
      // Retrieve token from localStorage
      // const token = JwtService.getToken()

      // If token is found
      if (token) {
        // Get request headers and if headers is undefined assign blank object
        config.headers = config.headers || {}

        // Set authorization header
        // ℹ️ JSON.parse will convert token to string
        config.headers.Authorization = token ? `Bearer ${token}` : ''
      }

      // Return modified config
      return config
    })

    // ℹ️ Add response interceptor to handle 401 response
    axios.interceptors.response.use(
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
        return await Promise.reject<ApiResponseInterface>(error)
      }
    )
  }

  /**
   * @description set the default HTTP request headers
   */
  public static setHeader(): void {
    // eslint-disable-next-line import/no-named-as-default-member
    // ApiService.vueInstance.axios.defaults.headers.common.Authorization = `Bearer ${JwtService.getToken()}`
    ApiService.vueInstance.axios.defaults.headers.common.Accept =
      'application/json'
  }

  /**
   * @description send the GET HTTP request
   * @returns Promise<AxiosResponse>
   * @param resource
   * @param params
   */
  public static query(resource: string, params: AxiosRequestConfig) {
    return ApiService.vueInstance.axios.get(resource, params)
  }

  /**
   * @description send the GET HTTP request
   * @returns Promise<AxiosResponse>
   * @param resource
   * @param slug
   */
  public static get(
    resource: string,
    slug = '' as string
  ): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.get(`${resource}/${slug}`)
  }

  /**
   * @description set the POST HTTP request
   * @returns Promise<AxiosResponse>
   * @param resource
   * @param params
   */
  public static post(
    resource: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.post(`${resource}`, params)
  }

  /**
   * @description send the UPDATE HTTP request
   * @returns Promise<AxiosResponse>
   * @param resource
   * @param slug
   * @param params
   */
  public static update(
    resource: string,
    slug: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.put(`${resource}/${slug}`, params)
  }

  /**
   * @description Send the PUT HTTP request
   * @returns Promise<AxiosResponse>
   * @param resource
   * @param params
   */
  public static put(
    resource: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.put(`${resource}`, params)
  }

  /**
   * @description Send the DELETE HTTP request
   * @returns Promise<AxiosResponse>
   * @param resource
   */
  public static delete(resource: string): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.delete(resource)
  }
}

export default ApiService
