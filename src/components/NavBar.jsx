import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/certificates", label: "Certificates" },
];

export default function NavBar() {
  return (
    <nav className=" backdrop-blur-md bg-[#151926cc] border border-[#2A2F3E] rounded-full overflow-hidden drop-shadow-2xl px-8 py-4 min-w-75 shadow-lg">
      <ul className="flex flex-row gap-8 items-center justify-center">
        {NAV_ITEMS.map(({ path, label }) => (
          <li key={path}>
            <NavLink
              to={path}
              end
              className="relative group flex flex-col items-center justify-center text-sm font-bold uppercase tracking-widest transition-colors duration-300 text-slate-400 hover:text-white aria-[current=page]:text-[#3b82f6]
              "
            >
              {label}
              <span
                className="
                  absolute -bottom-1 h-0.5 bg-blue-500 rounded-full transition-all duration-300 w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50 group-aria-[current=page]:w-full group-aria-[current=page]:opacity-100
                "
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
