import { Routes, Route } from "react-router-dom"
import "./App.css";
import Welcome from "./pages/Welcome";
import HomePage from "./pages/HomePage";
import HeroesPage from "./pages/HeroesPage";
import CreaturesPage from "./pages/CreaturesPage";
import EpisodesPage from "./pages/EpisodesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/heroes" element={<HeroesPage />} />
      <Route path="/creatures" element={<CreaturesPage />} />
      <Route path="/episodes" element={<EpisodesPage />} />
    </Routes>
  );
}

export default App;
