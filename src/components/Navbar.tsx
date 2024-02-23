import styled from "styled-components";
import data from "../data/data.json";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | undefined>(
    undefined
  );
  const handleClick = (planetName: string) => {
    setSelectedPlanet(planetName);
  };
  return (
    <Header>
      <Title>THE PLANETS</Title>
      <NavBar>
        {data.map((item) => {
          return (
            <>
              <Link key={item.name} to={`/home/${item.name}`}>
                <PlanetName
                  key={item.name}
                  onClick={() => handleClick(item.name)}
                  selected={selectedPlanet === item.name}
                  btnTopColor={item["circle-color"]}
                >
                  {item.name}
                </PlanetName>
              </Link>
            </>
          );
        })}
      </NavBar>
    </Header>
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
  @media screen and (min-width: 1440px) {
    margin-top: 0px;
    padding-bottom: 0;
    border-bottom: 0;
  }
`;
const PlanetName = styled.li<{
  btnTopColor: string | any;
  selected: boolean;
}>`
  color: white;
  line-height: 25px;
  font-size: 13px;
  font-weight: 700;
  @media screen and (min-width: 1440px) {
    border-top: ${(props) =>
      props.selected ? `4px solid ${props.btnTopColor}` : ""};
  }
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
const Header = styled.header`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #393950;
    margin-top: 39px;
    padding: 0 40px 27px 32px;
  }
`;
