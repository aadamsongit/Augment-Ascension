"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "@/utils/firebase";
import { signInWithEmailAndPasswordUtil } from "@/utils/firebase";
import { User } from "firebase/auth";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const logout = () => signOut(auth);

  const signup = async (email: string, password: string) => {
    const user = await createAuthUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await createUserDocumentFromAuth(user);
    setUser(user); // update context state
  };

  const login = async (email: string, password: string) => {
    const user = await signInWithEmailAndPasswordUtil(auth, email, password);
    setUser(user); // update context state
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// 🔑 This is the hook to use everywhere
export const useAuth = () => useContext(AuthContext);
