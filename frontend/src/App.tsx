/* IMPORTS */
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import ProjectView from "./pages/projectView/ProjectView";
import GlobalLayout from "./components/layout/global/GlobalLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectView />} />
      </Route>
    </Routes>
  );
}
