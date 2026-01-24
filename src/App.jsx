import React from "react";
import InfoCard from "./components/InfoCard";
import NavigationCard from "./components/NavigationCard";
import WindowsCard from "./components/windowsCard";

function App() {
  return (
    <div className="flex items-center justify-center bg-black p-10">
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

export default App;
