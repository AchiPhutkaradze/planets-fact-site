import styled from "styled-components";
import data from "../data/data.json";
import { Link } from "react-router-dom";
import React, { useState } from "react";
export default function Navbar(props: { sharedInfo: string | undefined }) {
  const [_selectedPlanet, setSelectedPlanet] = useState<string | undefined>(
    props.sharedInfo
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
            <React.Fragment key={item.name}>
              <Link to={`/home/${item.name}`}>
                <PlanetName
                  onClick={() => handleClick(item.name)}
                  selected={props.sharedInfo === item.name}
                  color={item["circle-color"]}
                >
                  {item.name}
                </PlanetName>
              </Link>
            </React.Fragment>
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
    position: absolute;
    top: 0;
    right: 40px;
  }
`;
const PlanetName = styled.li<{
  color: string;
  selected: boolean;
}>`
  color: white;
  line-height: 25px;
  font-size: 13px;
  font-weight: 700;
  @media screen and (min-width: 1440px) {
    border-top: ${(props) =>
      props.selected ? `4px solid ${props.color}` : ""};
    padding-top: 40px;
    &:hover {
      cursor: pointer;
    }
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
