import { useForm } from "react-hook-form";
import Button from "./ui/Button";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";

interface IFormData {
  email: string;
  password: string;
}

export function SignInForm() {
  const form = useForm<IFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = form.handleSubmit(async ({ email, password }) => {
    console.log("email:", email);
    console.log("password:", password);
  });

  return (
    <form className="mt-8 flex flex-col gap-2" onSubmit={handleSubmit}>
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
