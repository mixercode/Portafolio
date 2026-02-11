import { NavLink } from "react-router-dom";

// Centralizamos la configuración de estilos para mantener el JSX limpio
const NAV_ITEMS = [
  { path: "/", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/certificates", label: "Certificates" },
];

export default function NavBar() {
  return (
    <nav
      className="backdrop-blur-md bg-[#151926cc]/50 border border-[#2A2F3E] 
                 drop-shadow-2xl rounded-full px-8 py-4"
    >
      <ul className="flex flex-row gap-6 items-center">
        {NAV_ITEMS.map(({ path, label }) => (
          <li key={path}>
            <NavLink
              to={path}
              // El atributo 'end' evita que "/" coincida con "/projects"
              end={path === "/"}
              className={({ isActive }) => `
                relative group text-sm font-bold uppercase tracking-wider 
                transition-all duration-300
                ${isActive ? "text-blue-600" : "text-slate-400 hover:text-gray-100"}
              `}
            >
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={`
                      absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 
                      bg-blue-500 transition-all duration-300 rounded-full
                      ${isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50"}
                    `}
                  />
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
