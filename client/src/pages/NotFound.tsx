import Button from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl">404 Not Found</h1>
      <Button onClick={() => navigate(-1)}>Voltar</Button>
    </div>
  );
}
