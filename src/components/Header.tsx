import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "../../public/assets/icon-hamburger.svg";
export default function Header() {
  return (
    <>
      <HeaderBox>
        <Title>THE PLANETS</Title>
        <Link to={"/"}>
          <MenuImg src={MenuIcon} />
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
  font-family: "Antonio";
`;
const MenuImg = styled.img``;
const Line = styled.hr`
  background-color: #393950;
  height: 1px;
`;
