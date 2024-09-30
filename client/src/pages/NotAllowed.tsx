import Button from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

export function NotAllowed() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl">Seems like you are not allowed to be here</h1>
      <Button onClick={() => navigate(-1)}>Voltar</Button>
    </div>
  );
}
