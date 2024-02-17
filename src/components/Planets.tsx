import data from "../data/data.json";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";
import iconSource from "/assets/icon-source.svg";

interface Planet {
  name: string;
  overview: object | string | any;
  images: object | string | any;
  structure: object | string | any;
  geology: any;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  bottomColor: string;
}
export default function Planets() {
  const location = useParams();
  const currentPlanet = location.planet;
  const [info, setInfo] = useState("overview");
  const [correctPlanet, setCorrectPlanet] = useState<Planet>(
    data.find((item) => item.name === currentPlanet)!
  );
  console.log(setCorrectPlanet);

  const BottomColor = correctPlanet.bottomColor;

  return (
    <Color>
      <Buttons>
        <Overview onClick={() => setInfo("overview")}>OVERVIEW</Overview>
        <OverviewBottomBorder info={info} bottomColor={BottomColor} />
        <Structure onClick={() => setInfo("structure")}>STRUCTURE</Structure>
        <StructureBottomBorder info={info} bottomColor={BottomColor} />
        <Surface onClick={() => setInfo("surface")}>SURFACE </Surface>
        <SurfaceBottomBorder info={info} bottomColor={BottomColor} />
      </Buttons>
      <PlanetImgBox>
        <PlanetImg
          src={
            info === "overview"
              ? correctPlanet.images.planet
              : info === "structure"
              ? correctPlanet.images.internal
              : correctPlanet.images.geology
          }
        />
      </PlanetImgBox>
      <Description>
        <PlanetName>{correctPlanet.name}</PlanetName>
        <Text>
          {info === "overview"
            ? correctPlanet.overview.content
            : info === "structure"
            ? correctPlanet.structure.content
            : info === "surface"
            ? correctPlanet.geology.content
            : ""}
        </Text>
        <Source>
          <Wikipedia
            href={
              info === "overview"
                ? correctPlanet.overview.source
                : info === "structure"
                ? correctPlanet.structure.source
                : info === "surface"
                ? correctPlanet.geology.source
                : ""
            }
          >
            Source : Wikipedia
          </Wikipedia>
          <Icon src={iconSource} />
        </Source>
      </Description>
      <Footer>
        <Child>
          <FirstChild>ROTATION TIME</FirstChild>
          <SecondChild> {correctPlanet.rotation}</SecondChild>
        </Child>
        <Child>
          <FirstChild>REVOLUTION TIME</FirstChild>
          <SecondChild> {correctPlanet.revolution}</SecondChild>
        </Child>
        <Child>
          <FirstChild>RADIUS</FirstChild>
          <SecondChild> {correctPlanet.radius}</SecondChild>
        </Child>
        <Child>
          <FirstChild>AVERAGE TEMP.</FirstChild>
          <SecondChild> {correctPlanet.temperature}</SecondChild>
        </Child>
      </Footer>
    </Color>
  );
}
const PlanetImgBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 95px 0;
`;
const PlanetImg = styled.img`
  width: 30%;
  height: 30%;
`;
const Color = styled.div`
  background-image: url(/src/assets/background-stars.svg);
  height: 100vh;
`;
const Buttons = styled.div`
  height: 50px;
  position: relative;
  display: grid;
  grid-template-columns: 80px 80px 80px;
  justify-content: center;
  align-items: center;
  gap: 43px;
  border-bottom: 1px solid #393950;
`;
const Overview = styled.button`
  width: 80px;
  background-color: rgba(7, 7, 36, 1);
  color: #c1c1c8;
  position: absolute;
  grid-column: 1;
`;
const Structure = styled.button`
  width: 80px;
  background-color: rgba(7, 7, 36, 1);
  color: #c1c1c8;
  grid-column: 2;
  position: absolute;
`;
const Surface = styled.button`
  width: 80px;
  background-color: rgba(7, 7, 36, 1);
  color: #c1c1c8;
  grid-column: 3;
  position: absolute;
`;

const OverviewBottomBorder = styled.div<{ info: string; bottomColor: string }>`
  width: 80px;
  height: 4px;
  background-color: ${(props) =>
    props.info === "overview" ? `  ${props.bottomColor}` : ``};
  position: relative;
  top: 24px;
`;
const StructureBottomBorder = styled.div<{ info: string; bottomColor: string }>`
  width: 80px;
  height: 4px;
  background-color: ${(props) =>
    props.info === "structure" ? `  ${props.bottomColor}` : ``};
  position: relative;
  top: 24px;
`;
const SurfaceBottomBorder = styled.div<{ info: string; bottomColor: string }>`
  width: 80px;
  height: 4px;
  background-color: ${(props) =>
    props.info === "surface" ? `   ${props.bottomColor}` : ``};
  position: relative;
  top: 24px;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  align-items: center;
  gap: 16px;
`;
const PlanetName = styled.h1`
  color: #c1c1c8;
  font-family: "Antonio";
`;
const Text = styled.p`
  color: #c1c1c8;
  text-align: center;
`;
const Source = styled.div`
  display: flex;
  gap: 4px;
  align-items: end;
`;
const Wikipedia = styled.a`
  color: #c1c1c8;
`;
const Icon = styled.img`
  height: 12px;
`;
const Footer = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  padding: 28px 24px 47px 24px;
`;
const Child = styled.div`
  border: 1px solid #1a1a34;
  height: 48px;
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  width: 100%;
  color: wheat;
  align-items: center;
`;
const FirstChild = styled.p`
  font-size: 10px;
  line-height: 16px;
  opacity: 0.5;
  color: white;
  font-weight: 700;
`;
const SecondChild = styled.p`
  color: rgba(255, 255, 255, 1);
  font-family: "Antonio";
  line-height: 25.88px;
  font-size: 20px;
`;
