import Card from "./Card";
import WindowsCard from "./windowsCard";

export default function NavigationCard({ title, children }) {
  return (
    <Card>
      <div className="flex flex-col  justify-center gap-10">
        <div className="flex flex-row gap-5 justify-center items-center">
          <h2 className="w-1/3 font-semibold text-2xl">{title}</h2>
          <div className="w-full border-t border-white/50 shadow-2xl" />
        </div>

        {children}
      </div>
    </Card>
  );
}
