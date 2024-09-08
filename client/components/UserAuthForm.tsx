import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { signin } from "@/app/actions/sign-in";

export function UserAuthForm() {
  return (
    <form
      className="flex flex-col gap-4"
      action={async (formData) => {
        "use server";
        await signin(formData);
      }}
    >
      <Label className="sr-only" htmlFor="email">
        Email
      </Label>
      <Input
        name="email"
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
        name="password"
        id="password"
        placeholder="********"
        type="password"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect="off"
      />

      <Button variant="secondary">Sign in</Button>
    </form>
  );
}
