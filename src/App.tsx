import "./index.css";
import Menu from "./components/menu";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Planets from "./components/Planets";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  console.log(mediaQuery.matches);
  const [bigResolution, setBigResolution] = useState<boolean>(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    const resolutionChange = (event: MediaQueryListEvent | MediaQueryList) =>
      setBigResolution(event.matches);
    mediaQuery.addListener(resolutionChange);
    resolutionChange(mediaQuery);
  }, []);
  console.log(bigResolution);
  useEffect(() => {
    if (location.pathname === "/" && mediaQuery.matches) {
      navigate("home/Mercury");
    } else if (location.pathname === "/" && mediaQuery.matches === false) {
      navigate("home");
    }
  }, [location.pathname, mediaQuery.matches, navigate]);
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Header count={count} />
      {mediaQuery.matches ? <Navbar /> : ""}
      <Routes>
        <Route element={<Menu setCount={setCount} />} path="home" />
        <Route path="home/:planet" element={<Planets setCount={setCount} />} />
      </Routes>
    </>
  );
}

export default App;
