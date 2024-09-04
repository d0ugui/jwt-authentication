import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function UserAuthForm() {
  return (
    <div className="w-full max-w-[350px] mx-auto">
      <div className="flex flex-col gap-4">
        <Label className="sr-only" htmlFor="email">
          Email
        </Label>
        <Input
          id="email"
          placeholder="name@example.com"
          type="email"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
        />

        <Label className="sr-only" htmlFor="password">
          Password
        </Label>
        <Input
          id="password"
          placeholder="********"
          type="password"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
        />

        <Button variant="secondary">Sign in</Button>
      </div>
    </div>
  );
}
