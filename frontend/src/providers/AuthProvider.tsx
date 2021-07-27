import { ReactNode, useCallback, useState } from 'react'
import { AuthContext, ISignInProps } from '../contexts/AuthContext'

type AuthProviderProps = {
  children: ReactNode
}

const tokensSession = 'sdfasdfFASDG51D5F1A231D23F123SDF'

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState(() => {
    const token = sessionStorage.getItem('@Pokezon_login')
    if (token) return token
    return ''
  })

  const signIn = useCallback(async ({ email, password }: ISignInProps) => {
    try {
      setAuth(tokensSession)
      sessionStorage.setItem('@Pokezon_login', tokensSession)
    } catch (error) {
      alert('Email ou senha inválidos')
    }
  }, [])

  const signOut = useCallback(() => {
    sessionStorage.removeItem('@Pokezon_login')
    setAuth('')
  }, [])

  return (
    <AuthContext.Provider value={{ auth, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
