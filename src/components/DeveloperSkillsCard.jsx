import WindowsCard from "./WindowsCard";

const softSkillsData = {
  collaboration: ["Trabajo en Equipo", "Git Workflow", "Comunicación Asertiva"],
  problemSolving: ["Análisis Crítico", "Lógica Estructural", "Autogestión"],
  adaptability: ["Aprendizaje Continuo", "Resiliencia", "Flexibilidad"],
};

export default function SoftSkillsCard() {
  const skillsEntries = Object.entries(softSkillsData);

  return (
    <WindowsCard>
      <div className="font-mono text-xs sm:text-sm lg:text-base text-[#d4d4d4] p-2">
        <div className="flex">
          <span className="w-8 select-none text-gray-500">1</span>
          <p>
            <span className="text-[#c586c0]">const</span>{" "}
            <span className="text-[#4fc1ff]">softSkills</span>{" "}
            <span className="text-[#d4d4d4]">=</span> {"{"}
          </p>
        </div>

        {skillsEntries.map(([category, skills], index) => {
          const lineNumber = index + 2;

          return (
            <div className="flex transition-colors" key={category}>
              <span className="w-8 select-none text-gray-500">
                {lineNumber}
              </span>
              <p className="pl-4 break-all">
                <span className="text-[#9cdcfe]">{category}:</span> {"["}
                {skills.map((skill, i) => (
                  <span key={skill}>
                    <span className="text-[#ce9178]">'{skill}'</span>

                    {i < skills.length - 1 ? ", " : ""}
                  </span>
                ))}
                {"],"}
              </p>
            </div>
          );
        })}

        <div className="flex">
          <span className="w-8 select-none text-gray-500">
            {skillsEntries.length + 2}
          </span>
          <p>{"};"}</p>
        </div>
      </div>
    </WindowsCard>
  );
}
