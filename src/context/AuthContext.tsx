"use client";

import { createContext, useContext, useEffect, useState } from "react";
import api from "@lib/api";
import { setUserToStorage, getUserFromStorage, removeUserFromStorage } from "@lib/auth";
import { useRouter } from "next/navigation";

type User = {
  id: number;
  email: string;
  name?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // 🔐 Restore session
  useEffect(() => {
    const restore = async () => {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data.user);
        setUserToStorage(res.data.user);
      } catch {
        const stored = getUserFromStorage();
        if (stored) setUser(stored);
        else setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restore();
  }, []);

  // LOGIN
  const login = async (email: string, password: string) => {
    const res = await api.post("/auth/login", { email, password });

    setUser(res.data.user);
    setUserToStorage(res.data.user);

    router.push("/dashboard/home");
  };

  // LOGOUT
  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } catch {}

    setUser(null);
    removeUserFromStorage();
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
