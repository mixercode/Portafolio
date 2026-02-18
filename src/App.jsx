import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import CertificatePage from "./pages/CertificatePage";
import MainLayout from "./components/MainLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<AboutPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="certificates" element={<CertificatePage />} />
      </Route>
    </Routes>
  );
}
