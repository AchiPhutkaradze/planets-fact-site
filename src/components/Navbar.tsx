import styled from "styled-components";
import data from "../data/data.json";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <NavBar>
      {data.map((item) => {
        return (
          <>
            <Link to={`/home/${item.name}`}>
              <PlanetName>{item.name}</PlanetName>
            </Link>
          </>
        );
      })}
    </NavBar>
  );
}
const NavBar = styled.nav`
  display: flex;
  margin-top: 39px;
  justify-content: center;
  color: rgba(255, 255, 255, 1);
  opacity: 0.5;
  list-style-type: none;
  gap: 33px;
  text-transform: uppercase;
  border-bottom: 1px solid #393950;
  padding-bottom: 27px;
`;
const PlanetName = styled.li`
  color: white;
  line-height: 25px;
  font-size: 13px;
  font-weight: 700;
`;
