import NavigationCard from "../components/NavigationCard";
import WindowsCard from "../components/WindowsCard";
import InfoCard from "../components/InfoCard";

export default function AboutPage() {
  return (
    <NavigationCard title="About me">
      <div className="flex flex-row gap-10">
        <p className="w-1/2 text-left text-white/90">
          I'm Miguel, a passionate developer with a love for creating dynamic
          and responsive web applications. With a strong foundation in
          JavaScript and React, I enjoy bringing ideas to life through code.
        </p>
        <WindowsCard>
          <p>asdasdasdsdsdasaasdsdsdsdsaDSdasdasdd</p>
        </WindowsCard>
      </div>
    </NavigationCard>
  );
}
