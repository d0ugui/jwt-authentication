import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
  isPrivate: boolean;
  allowedRoles?: string[];
}

export function AuthGuard({ isPrivate, allowedRoles = [] }: AuthGuardProps) {
  const { signedIn, user } = useAuth();

  if (signedIn && user && !allowedRoles.includes(user.role)) {
    console.log("USER", user);
    return <Navigate to="/not-allowed" replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  if (!signedIn && isPrivate) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
}
