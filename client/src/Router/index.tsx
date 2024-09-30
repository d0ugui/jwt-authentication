import { Route, Routes } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";

import { Home } from "@/pages/Home";
import { SignIn } from "@/pages/SignIn";
import { SignUp } from "@/pages/SignUp";
import { Settings } from "@/pages/Settings";
import { Docs } from "@/pages/Docs";
import { NotFound } from "@/pages/NotFound";
import { NotAllowed } from "@/pages/NotAllowed";

export function Router() {
  return (
    <Routes>
      <Route element={<AuthGuard allowedRoles={["USER"]} isPrivate />}>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route element={<AuthGuard allowedRoles={["ADMIN"]} isPrivate />}>
        <Route path="/docs" element={<Docs />} />
      </Route>

      <Route element={<AuthGuard isPrivate={false} />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>

      <Route path="*" element={<NotFound />} />
      <Route path="/not-allowed" element={<NotAllowed />} />
    </Routes>
  );
}
