import Button from "./ui/Button";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";

export function SignInForm() {
  return (
    <form className="mt-8 flex flex-col gap-2">
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="name@example.com" type="email" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" placeholder="********" type="password" />
      </div>

      <Button className="mt-3">Sign in</Button>
    </form>
  );
}
