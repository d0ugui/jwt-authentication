import Button from "@/components/ui/Button";
import { IUser } from "@/entities/IUser";
import { useAuth } from "@/hooks/useAuth";
import { UserService } from "@/services/UserService";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function Home() {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { signOut } = useAuth();

  useEffect(() => {
    UserService.getUser()
      .then(setUser)
      .catch(() => {
        toast.error("Erro ao carregar os dados do usuário!");
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>Página após login!</h1>
      <Button onClick={signOut}>Sair</Button>
    </div>
  );
}
