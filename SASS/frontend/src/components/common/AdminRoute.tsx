import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function AdminRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return user.role === "admin" ? children : <Navigate to="/" replace />;
}
