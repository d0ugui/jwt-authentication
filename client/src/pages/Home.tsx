import { Appbar } from "@/components/appbar";
import { useAuth } from "@/hooks/useAuth";
import { UserService } from "@/services/UserService";
import { useEffect } from "react";
import { toast } from "sonner";

export function Home() {
  const { setUser } = useAuth();

  useEffect(() => {
    UserService.getUser()
      .then(setUser)
      .catch(() => {
        toast.error("Erro ao carregar os dados do usuário!");
      });
  }, []);

  return (
    <div>
      <Appbar />

      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Home</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <h1>Página home</h1>
        </div>
      </main>
    </div>
  );
}
