import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "../../public/assets/icon-hamburger.svg";
export default function Header(props: { count: number }) {
  return (
    <>
      <HeaderBox>
        <Title>THE PLANETS</Title>
        <Link to={"/home"}>
          <MenuImg src={MenuIcon} count={props.count} />
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
const MenuImg = styled.img<{ count: number }>`
  opacity: ${(props) => (props.count === 1 ? "0.2" : "")};
`;
const Line = styled.hr`
  background-color: #393950;
  height: 1px;
`;
