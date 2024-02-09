import "./index.css";
import Menu from "./components/menu";
import { Routes, Route } from "react-router-dom";
import Planets from "./components/Planets";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/:planet" element={<Planets />} />
      </Routes>
    </>
  );
}

export default App;
