import React from "react";
import InfoCard from "./components/InfoCard";

function App() {
  return (
    <div className="flex items-center justify-center bg-black p-10">
      <InfoCard
        name="Miguel Flores "
        location="Hola"
        email="yo@me.com"
        cellphone="2222222222"
      />
    </div>
  );
}

export default App;
