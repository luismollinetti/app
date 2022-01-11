import axios, { AxiosError } from 'axios'
import { parseCookies, setCookie } from 'nookies'
import { signOut } from '../../contexts/AuthContext'
import { AuthTokenError } from '../errors/AuthTokenError'
let isRefreshing = false
let failedRequestQueue: {
  onSuccess: (token: string) => void
  onFailure: (err: AxiosError<any>) => void
}[] = []

export function getAPIClient(ctx?: any) {
  let cookies = parseCookies(ctx)
  /*  const https = require('https');
  const rootCas = require('ssl-root-cas').create();
  const httpsAgent = new https.Agent({ca: rootCas}); */

  const api = axios.create({
    baseURL: 'http://192.168.1.245:3333',
    //baseURL: 'https://windelweb.windel.com.br:3000',

    headers: {
      Authorization: `Bearer ${cookies['nextauth.token']}`
    }
  })

  api.interceptors.response.use(
    response => {
      return response
    },
    (error: AxiosError) => {
      if (error.response && error.response.status === 401) {
        if (error.response.data?.code === 'token.expired') {
          cookies = parseCookies(ctx)

          const { 'nextauth.refreshToken': refreshToken } = cookies
          const originalConfig = error.config

          if (!isRefreshing) {
            isRefreshing = true

            api
              .patch('auth/refresh', {
                refreshToken
              })
              .then(response => {
                const { token } = response.data

                setCookie(ctx, 'nextauth.token', token, {
                  maxAge: 60 * 60,
                  path: '/'
                })

                setCookie(
                  ctx,
                  'nextauth.refreshToken',
                  response.data.refreshToken,
                  {
                    maxAge: 60 * 60,
                    path: '/'
                  }
                )

                api.defaults.headers['Authorization'] = `Bearer ${token}`

                failedRequestQueue.forEach(request => request.onSuccess(token))
                failedRequestQueue = []
              })
              .catch(err => {
                failedRequestQueue.forEach(request => request.onFailure(err))
                failedRequestQueue = []

                if (process.browser) {
                  signOut()
                }
              })
              .finally(() => {
                isRefreshing = false
              })
          }

          return new Promise((resolve, reject) => {
            failedRequestQueue.push({
              onSuccess: (token: string) => {
                originalConfig.headers['Authorization'] = `Bearer ${token}`

                resolve(api(originalConfig))
              },
              onFailure: (err: AxiosError) => {
                reject(err)
              }
            })
          })
        } else {
          if (process.browser) {
            signOut()
          } else {
            return Promise.reject(new AuthTokenError())
          }
        }
      }
      return Promise.reject(error)
    }
  )

  return api
}
