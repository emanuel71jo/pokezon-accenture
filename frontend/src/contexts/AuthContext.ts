import { createContext } from "react";

export interface ISignInProps {
  email: string;
  password: string;
}

interface AuthContextData {
  auth: string;
  signIn: (data: ISignInProps) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData);
