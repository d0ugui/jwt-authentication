import { useForm } from "react-hook-form";
import Button from "./ui/Button";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

interface IFormData {
  email: string;
  password: string;
}

export function SignInForm() {
  const { signIn } = useAuth();

  const form = useForm<IFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, formState } = form;

  const handleSubmit = form.handleSubmit(async ({ email, password }) => {
    try {
      await signIn(email, password);
    } catch {
      toast.error("Credenciais inválidas!");
    }
  });

  return (
    <form className="mt-8 flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="name@example.com"
          type="email"
          {...register("email")}
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="********"
          type="password"
          {...register("password")}
        />
      </div>

      <Button className="mt-3" disabled={formState.isSubmitting}>
        {formState.isSubmitting ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
