import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <AuthProvider>
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Outlet />
        </main>
      </AuthProvider>
      <Toaster />
    </div>
  );
}

export default App;
