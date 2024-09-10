import Button from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function SignInForm() {
  return (
    <form className="flex flex-col mt-6">
      <div className=" flex flex-col gap-2">
        <Label htmlFor="email mb-1">Email</Label>
        <Input
          id="email"
          placeholder="name@example.com"
          type="email"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
        />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" placeholder="********" type="password" />
      </div>

      <Button className="w-full mt-6">Sign in</Button>
    </form>
  );
}
