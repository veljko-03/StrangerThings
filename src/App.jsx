import { Routes, Route } from 'react-router-dom'
import "./App.css";
import Welcome from "./pages/Welcome";
import HomePage from "./pages/HomePage";
import HeroesPage from "./pages/HeroesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/heroes" element={<HeroesPage />} />
    </Routes>
  );
}

export default App;
