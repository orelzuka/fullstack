import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
}

export default App;
