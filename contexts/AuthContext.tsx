import { createContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = {}; // Placeholder for actual auth logic (e.g., Firebase auth)

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
