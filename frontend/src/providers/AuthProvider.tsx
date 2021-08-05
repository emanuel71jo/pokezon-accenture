import { ReactNode, useCallback, useEffect, useState } from "react";
import { AuthContext, ISignInProps } from "../contexts/AuthContext";
import { app } from "../services/api";
import jwtDecode from "jwt-decode";

type AuthProviderProps = {
  children: ReactNode;
};

interface IProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fileName: string;
  created_at: string;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState(() => {
    const token = sessionStorage.getItem("@Pokezon_login");
    if (token) return token;
    return "";
  });

  const [profile, setProfile] = useState<IProfile | undefined>();

  useEffect(() => {
    if (auth !== "") {
      const { userId } = jwtDecode<{ userId: string; email: string }>(auth);
      app
        .get<IProfile>(`users/${userId}`)
        .then((response) => setProfile(response.data));
    } else setProfile(undefined);
  }, [auth]);

  const signIn = useCallback(async ({ email, password }: ISignInProps) => {
    const { data } = await app.post<{ token: string }>("/signIn", {
      email,
      password,
    });
    setAuth(data.token);
    sessionStorage.setItem("@Pokezon_login", data.token);
  }, []);

  const signOut = useCallback(() => {
    sessionStorage.removeItem("@Pokezon_login");
    setAuth("");
  }, []);

  return (
    <AuthContext.Provider value={{ auth, signIn, signOut, profile }}>
      {children}
    </AuthContext.Provider>
  );
};
