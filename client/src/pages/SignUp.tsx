import { SignUpForm } from "@/components/SignUpForm";

export function SignUp() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-[350px]">
        <h1 className="text-2xl font-bold text-center">Register!</h1>

        <SignUpForm />

        <p className="text-center text-sm text-muted-foreground mt-4">
          <a
            href="/sign-in"
            className="hover:text-brand underline underline-offset-4"
          >
            Already have an account? Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
