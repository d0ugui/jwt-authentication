import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import Layout from "@/layout/Layout";

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

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
