import { createContext } from "react";

export interface ISignInProps {
  email: string;
  password: string;
}

interface IProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fileName: string;
  created_at: string;
}

interface AuthContextData {
  auth: string;
  signIn: (data: ISignInProps) => Promise<void>;
  signOut: () => void;
  profile?: IProfile;
}

export const AuthContext = createContext({} as AuthContextData);
