import { Input } from "./ui/Input";
import Button from "./ui/Button";
import { Label } from "./ui/Label";

export function SignUpForm() {
  return (
    <form className="mt-8 flex flex-col gap-2">
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input id="name" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>

      <Button className="mt-3">Sign up</Button>
    </form>
  );
}
