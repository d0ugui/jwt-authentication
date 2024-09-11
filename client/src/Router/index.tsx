import { Route, Routes } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";

import { Home } from "@/pages/Home";
import { SignIn } from "@/pages/SignIn";
import { SignUp } from "@/pages/SignUp";

export function Router() {
  return (
    <Routes>
      <Route element={<AuthGuard isPrivate />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<AuthGuard isPrivate={false} />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
