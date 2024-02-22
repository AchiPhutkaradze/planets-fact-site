import styled from "styled-components";
import data from "../data/data.json";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Container>
      <Title>THE PLANETS</Title>
      <NavBar>
        {data.map((item) => {
          return (
            <>
              <Link key={item.name} to={`/home/${item.name}`}>
                <PlanetName key={item.name}>{item.name}</PlanetName>
              </Link>
            </>
          );
        })}
      </NavBar>
    </Container>
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
  padding-bottom: 27px;
  border-bottom: 1px solid #393950;
  @media screen and (min-width: 1140px) {
    margin-top: 0px;
    padding-bottom: 0;
    border-bottom: 0;
  }
`;
const PlanetName = styled.li`
  color: white;
  line-height: 25px;
  font-size: 13px;
  font-weight: 700;
`;
const Title = styled.h1`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    font-size: 28px;
    line-height: 36px;
    color: rgba(255, 255, 255, 1);
    font-family: "Antonio";
  }
`;
const Container = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #393950;
    margin-top: 39px;
    padding: 0 40px 27px 32px;
  }
`;
