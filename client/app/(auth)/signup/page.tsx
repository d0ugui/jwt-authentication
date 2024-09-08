import { buttonVariants } from "@/components/ui/button";
import { UserSignUpForm } from "@/components/UserSignInForm";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Register",
  description: "Register your account",
};

export default function SignUp() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center mx-auto">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <ChevronLeft size={16} className="mr-2" />
          Back
        </>
      </Link>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
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
