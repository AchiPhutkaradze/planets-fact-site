import data from "../data.json";
import styled from "styled-components";
import { useParams } from "react-router-dom";

interface Planet {
  name: string;
}
export default function Planets() {
  const location = useParams();
  const currentPlanet = location.planet;
  console.log(location);
  const correctPlanet: Planet = data.find(
    (item) => item.name === currentPlanet
  )!;
  console.log(correctPlanet);
  return (
    <Color>
      <Container>{correctPlanet.name}</Container>;
    </Color>
  );
}
const Container = styled.div`
  width: 120px;
  border: 2px solid;
  color: wheat;
  font-size: 40px;
`;
const Color = styled.div`
  background-image: url(../assets/background-stars.svg);
  height: 100vh;
`;
