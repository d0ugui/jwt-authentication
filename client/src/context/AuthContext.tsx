import { createContext } from "react";

interface IAuthContextValue {
  signedIn: boolean;
}

export const AuthContext = createContext({} as IAuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const value: IAuthContextValue = {
    signedIn: false,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
