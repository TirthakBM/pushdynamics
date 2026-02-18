"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  setToken,
  getToken,
  removeToken,
  setUserToStorage,
  getUserFromStorage,
  removeUserFromStorage,
} from "@lib/auth";
import api from "@lib/api";
import { useRouter } from "next/navigation";

type User = {
  id: number;
  email: string;
  name?: string;
  lname?: string;
  user_type?: string;
  phone?: string | null;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore session
  useEffect(() => {
    const restoreUser = async () => {
      const storedUser = getUserFromStorage();
      const token = getToken();

      if (storedUser && token) {
        setUser(storedUser);
      }

      setLoading(false);
    };

    restoreUser();
  }, []);

  // LOGIN
  const login = async (email: string, password: string) => {
    const res = await api.post("/auth/login", { email, password });

    const token = res.data.token;
    setToken(token);

    // Fetch full details
    const userRes = await api.get(
      `/auth/get-user-details?email=${email}`
    );

    const fullUser = userRes.data.userObject;

    setUser(fullUser);
    setUserToStorage(fullUser);

    // Redirect after login
    router.push("/dashboard/home");
  };

  // LOGOUT
  const logout = () => {
    removeToken();
    removeUserFromStorage();
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
