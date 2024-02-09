import styled from "styled-components";
import data from "../data.json";
import { Link } from "react-router-dom";

function Menu() {
  console.log(data);

  return (
    <>
      <Header>
        <Title>THE PLANETS</Title>
        <MenuImg src="/src/assets/icon-hamburger.svg" />
      </Header>
      <Line />
      <Main>
        {data.map((item) => {
          return (
            <>
              <Link to={`${item.name}`}>
                <Planet>
                  <Circle style={{ backgroundColor: item["circle-color"] }} />
                  <FlexDiv>
                    <PlanetName>{item.name}</PlanetName>

                    <Arrow src="/src/assets/icon-chevron.svg" />
                  </FlexDiv>
                </Planet>
              </Link>
              <BottomLine />
            </>
          );
        })}
      </Main>
    </>
  );
}
export default Menu;

const Header = styled.header`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
`;
const MenuImg = styled.img``;
const Line = styled.hr`
  background-color: #393950;
  height: 1px;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 44px;
  padding: 0 24px;
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
  font-family: "Spartan";
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
