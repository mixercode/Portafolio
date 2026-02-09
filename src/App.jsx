import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import CertificatePage from "./pages/CertificatePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/certificates" element={<CertificatePage />} />
    </Routes>
  );
}

export default App;
