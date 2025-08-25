import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex flex-row justify-between items-center">
      <NavLink to="/">
        <span className="text-xl font-bold text-blue-500">BLOG 3000</span>
      </NavLink>
      <nav className="flex space-x-6">
        <NavLink
          to="/login"
          className="text-gray-600 hover:text-black font-semibold"
        >
          Connexion
        </NavLink>
        <NavLink
          to="/register"
          className="text-gray-600 hover:text-black font-semibold"
        >
          Inscription
        </NavLink>
      </nav>
    </header>
  );
}
