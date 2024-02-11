import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <HeaderBox>
        <Title>THE PLANETS</Title>
        <Link to={"/"}>
          <MenuImg src="/src/assets/icon-hamburger.svg" />
        </Link>
      </HeaderBox>
      <Line />
    </>
  );
}

const HeaderBox = styled.header`
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
