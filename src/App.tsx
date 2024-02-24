import "./index.css";
import Menu from "./components/menu";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Planets from "./components/Planets";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  const [_bigResolution, setBigResolution] = useState<boolean>(
    window.matchMedia("(min-width: 768px)").matches
  );
  const [sharedInfo, setSharedInfo] = useState<string | undefined>();
  useEffect(() => {
    const resolutionChange = (event: MediaQueryListEvent | MediaQueryList) =>
      setBigResolution(event.matches);
    mediaQuery.addListener(resolutionChange);
    resolutionChange(mediaQuery);
  }, []);
  useEffect(() => {
    if (location.pathname === "/" && mediaQuery.matches) {
      navigate("home/Earth");
    } else if (location.pathname === "/" && mediaQuery.matches === false) {
      navigate("home");
    }
  }, [location.pathname, mediaQuery.matches, navigate]);
  
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <SmallResolution>
        <Header count={count} />
      </SmallResolution>
      {mediaQuery.matches ? <Navbar sharedInfo={sharedInfo} /> : ""}
      <Routes>
        <Route element={<Menu setCount={setCount} />} path="home" />
        <Route
          path="home/:planet"
          element={
            <Planets setCount={setCount} setSharedInfo={setSharedInfo} />
          }
        />
      </Routes>
    </>
  );
}

export default App;

const SmallResolution = styled.div`
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
