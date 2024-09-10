import { SignInForm } from "./components/SignInForm";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-[350px]">
        <h1 className="text-2xl font-bold text-center">Welcome back!</h1>

        <SignInForm />

        <p className="text-center text-sm text-muted-foreground mt-4">
          <a
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
