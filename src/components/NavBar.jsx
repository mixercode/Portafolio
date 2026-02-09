import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/certificates", label: "Certificates" },
  ];

  return (
    <nav
      className="
        bg-[#1c2a56]/50 backdrop-blur-md border-b border-l border-white/10
        rounded-bl-3xl rounded-tr-3xl
        px-8 py-6
      "
    >
      <ul className="flex flex-row gap-6 items-center">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <li key={link.label}>
              <Link
                to={link.path}
                className={`
                  text-sm font-bold uppercase tracking-wider transition-colors duration-300
                  ${isActive ? "text-blue-400" : "text-gray-400 hover:text-gray-200"}
                `}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
