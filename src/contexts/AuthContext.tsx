import React, { createContext, useState, ReactNode, useEffect } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import router from 'next/router'
import { api } from '../services/api'

type User = {
  email: string
  name: string
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  isAuthenticated: boolean
  signIn(credentials:SignInCredentials): Promise<void>
  user: User;
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
  destroyCookie(undefined, 'nextauth.token')
  destroyCookie(undefined, 'nextauth.refreshToken')
  router.push('/')
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect (() => {
    const {'nextauth.token': token} = parseCookies()

    if(token) {
      api.get('/verifyUser').then(response => {
        const { email, name } = response.data
        setUser({ email, name })
      })
      .catch(() => {
        signOut()
      })
    }
  }, [])

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('auth/login/', {
        username: email,
        password: password
      })

      const { token, uuidToken, name } = response.data

      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60,
        path: '/'
      })

      setCookie(undefined, 'nextauth.refreshToken', uuidToken, {
        maxAge: 60 * 60,
        path: '/'
      })

      setUser({
        email,
        name,
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      router.push('/dashboard')

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
