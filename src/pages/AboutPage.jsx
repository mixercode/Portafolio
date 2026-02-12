import NavigationCard from "../components/NavigationCard";
import WindowsCard from "../components/WindowsCard";
import InfoCard from "../components/InfoCard";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black flex p-10 gap-8">
      <div className="mt-20">
        <InfoCard
          name={"José Miguel Flores Flores"}
          location={"Puebla, México"}
          email={"jmiguel.flores121@gmail.com"}
          cellphone={"+52 2226105309"}
        />
      </div>
      <NavigationCard title={"About me"}>
        <div className="flex flex-row gap-10">
          <p className="w-1/2 text-left">
            I'm Miguel, a passionate developer with a love for creating dynamic
            and responsive web applications. With a strong foundation in
            JavaScript and React, I enjoy bringing ideas to life through code.
          </p>
          <WindowsCard>
            <p>asdasdasdsdsdasaasdsdsdsdsaDSdasdasdd</p>
          </WindowsCard>
        </div>
      </NavigationCard>
    </div>
  );
}
