import "./index.css";
import Menu from "./components/menu";
import { Routes, Route } from "react-router-dom";
import Planets from "./components/Planets";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Header count={count} />
      <Routes>
        <Route path="/" element={<Menu setCount={setCount} />} />
        <Route path="/:planet" element={<Planets setCount={setCount} />} />
      </Routes>
    </>
  );
}

export default App;
