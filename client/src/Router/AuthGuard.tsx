import { Navigate, Outlet } from "react-router-dom";

export function AuthGuard({ isPrivate }: { isPrivate: boolean }) {
  const signedIn = false;

  if (signedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  if (!signedIn && isPrivate) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
}
