import { createContext, useMemo, useState } from "react";
import type { AuthUser } from "../types/auth";
import { mockAdminUser, mockStudentUser } from "../services/mockData";

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (role: "student" | "admin") => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = async (role: "student" | "admin") => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    if (role === "admin") {
      setUser(mockAdminUser);
    } else {
      setUser(mockStudentUser);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, isAuthenticated: Boolean(user), login, logout }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
