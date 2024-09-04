import { UserSignUpForm } from "@/components/UserSignInForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register",
  description: "Register your account",
};

export default function SignUp() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center mx-auto">
      <div className="flex w-full flex-col justify-center space-y-6 sm:[w-350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-light">Sign up</h1>
          <p>Create your account right now</p>
        </div>

        <UserSignUpForm />

        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/"
            className="hover:text-brand underline underline-offset-4"
          >
            I already have an account
          </Link>
        </p>
      </div>
    </div>
  );
}
