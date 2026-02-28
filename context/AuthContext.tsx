'use client';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import api from '@lib/axios';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userName: string, email: string, password: string, confirmPassword: string) => Promise<void>;
  logout: () => Promise<void>;
}
interface User {
  id: number;
  name: string;
  email: string;
  emailVerified?: boolean;
  user_type?: string;
  address?: string;
  addressL2?: string;
  city?: string;
  country?: string;
  postal_code?: string;
}

interface AuthResponse {
  user: User;
  message?: string;
}

interface RefreshResponse {
  success: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const res = await api.get<AuthResponse>('/auth/me'); // Hits exports.getMe
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await api.post<AuthResponse>('/auth/login', {
      email,
      password,
    }); // Hits exports.loginUser
    setUser(res.data.user);
    router.push('/dashboard');
  };

  const register = async (userName: string, email: string, password: string, confirmPassword: string) => {
    const res = await api.post<AuthResponse>('/auth/register', {
      userName: userName,
      email,
      password,
      confirmPassword
    }); // Hits exports.loginUser
    
    setUser(res.data.user);
    router.push('/dashboard');
  };

  const logout = async () => {
    await api.post('/auth/logout'); // Hits exports.logoutUser
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error('useAuth must be used within AuthProvider');
  return context;
};