import { Outlet } from "react-router-dom";
import InfoCard from "./InfoCard";

const USER_INFO = {
  name: "José Miguel Flores Flores",
  location: "Puebla, México",
  email: "jmiguel.flores121@gmail.com",
  cellphone: "+52 2226105309",
};

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-black flex p-10 gap-8">
      <aside className="mt-20">
        <InfoCard
          name={USER_INFO.name}
          location={USER_INFO.location}
          email={USER_INFO.email}
          cellphone={USER_INFO.cellphone}
        />
      </aside>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
