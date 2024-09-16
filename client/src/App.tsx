import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "./components/ui/Toaster";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <Toaster />
    </AuthProvider>
  );
}

export default App;
