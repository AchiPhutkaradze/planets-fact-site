import "./index.css";
import Menu from "./components/menu";
import { Routes, Route } from "react-router-dom";
import Planets from "./components/planets";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/:planet" element={<Planets />} />
      </Routes>
    </>
  );
}

export default App;
