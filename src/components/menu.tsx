import React from "react";
import styled from "styled-components";
import data from "../data/data.json";
import { Link } from "react-router-dom";
interface Type {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
function Menu(props: Type) {
  props.setCount(1);

  return (
    <>
      <Main>
        {data.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <Link to={`${item.name}`}>
                <Planet>
                  <Circle style={{ backgroundColor: item["circle-color"] }} />
                  <FlexDiv>
                    <PlanetName>{item.name}</PlanetName>
                    <Arrow src="../../public/assets/icon-chevron.svg" />
                  </FlexDiv>
                </Planet>
              </Link>
              <BottomLine />
            </React.Fragment>
          );
        })}
      </Main>
    </>
  );
}
export default Menu;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 44px;
  padding: 0 24px 67px;
  gap: 20px;
`;
const Planet = styled.div`
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(222, 244, 252, 1);
`;
const PlanetName = styled.h2`
  line-height: 25px;
  font-size: 15px;
  color: rgba(255, 255, 255, 1);
  text-transform: uppercase;
`;
const Arrow = styled.img`
  width: 7px;
  height: 8px;
`;
const FlexDiv = styled.div`
  padding-left: 25px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
const BottomLine = styled.hr`
  background-color: #393950;
  height: 1px;
  margin: 0px 0 20px;
`;
