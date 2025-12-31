import { Routes, Route } from 'react-router-dom'
import "./App.css";
import Welcome from "./pages/Welcome";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
