import { Input } from "./ui/Input";
import Button from "./ui/Button";
import { Label } from "./ui/Label";
import { useForm } from "react-hook-form";

interface IFormData {
  name: string;
  email: string;
  password: string;
}

export function SignUpForm() {
  const form = useForm<IFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = form.handleSubmit(async ({ name, email, password }) => {
    console.log("name:", name);
    console.log("email:", email);
    console.log("password:", password);
  });

  return (
    <form className="mt-8 flex flex-col gap-2" onSubmit={handleSubmit}>
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
