import data from "../data/data.json";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import iconSource from "/assets/icon-source.svg";
import { keyframes } from "styled-components";

interface Planet {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  bottomColor: string;
}
export default function Planets(props: {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setSharedInfo: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const location = useParams();
  const currentPlanet = location.planet;
  const [info, setInfo] = useState("overview");
  const correctPlanet: Planet = data.find(
    (item) => item.name === currentPlanet
  )!;
  const btnBottomColor = correctPlanet.bottomColor;
  useEffect(() => {
    return props.setCount(2), props.setSharedInfo(correctPlanet.name);
  });
  return (
    <Color>
      <Wrapper>
        <Buttons>
          <Overview
            info={info}
            color={btnBottomColor}
            onClick={() => setInfo("overview")}
          >
            OVERVIEW
          </Overview>
          <OverviewBottomBorder info={info} color={btnBottomColor} />
          <Structure
            info={info}
            color={btnBottomColor}
            onClick={() => setInfo("structure")}
          >
            STRUCTURE
          </Structure>
          <StructureBottomBorder info={info} color={btnBottomColor} />
          <Surface
            info={info}
            color={btnBottomColor}
            onClick={() => setInfo("surface")}
          >
            SURFACE
          </Surface>
          <SurfaceBottomBorder info={info} color={btnBottomColor} />
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
      </Wrapper>
    </Color>
  );
}
const PlanetImgBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 95px 0;
  @media screen and (min-width: 768px) {
    grid-column: 1/-1;
    padding: 100px 0;
    @media screen and (min-width: 1440px) {
      grid-column: 1/2;
      grid-row: 1/-1;
      bottom: 20px;
      position: relative;
    }
  }
`;
const AnimationName = keyframes`
  from {
    background-position: 0 0;
  } 
  to {
    background-position: 100% 100%;
  }
`;
const Keyframes = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const PlanetImg = styled.img`
  width: 30%;
  height: 30%;
  animation: ${Keyframes} 40s linear infinite;
  @media screen and (min-width: 768px) {
    width: 33%;
  }
  @media screen and (min-width: 1440px) {
    min-width: 450px;
    height: auto;
  }
`;

const Color = styled.div`
  height: 100vh;
  background-image: url(../assets/background-stars.svg);
  animation: ${AnimationName} 20s linear infinite;
  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 165px;
  }
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
  @media screen and (min-width: 768px) {
    grid-row: 2;
    grid-column: 2;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: none;
    border-bottom: 0;
    gap: 0;
    width: 100%;
    height: 152px;
    justify-content: inherit;
  }
  @media screen and (min-width: 1440px) {
    align-self: flex-start;
    height: 200px;
  }
`;
const Overview = styled.button<{ info: string; color: string }>`
  width: 80px;
  background-color: rgba(7, 7, 36, 1);
  color: #c1c1c8;
  position: absolute;
  grid-column: 1;
  @media screen and (min-width: 768px) {
    &::before {
      content: " 01";
    }
    width: 100%;
    grid-row: 1;
    background-color: ${(props) =>
      props.info === "overview" ? `  ${props.color}` : ``};
    padding: 8px 0 7px 20px;
    display: flex;
    gap: 17px;
    grid-column: 1/3;
    position: inherit;
    font-size: 15px;
    line-height: 25px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    letter-spacing: 2.57px;
    color: rgba(255, 255, 255, 1);
    @media screen and (min-width: 1440px) {
      &:hover {
        cursor: pointer;
        background-color: #313148;
        color: white;
      }
    }
  }
`;
const Structure = styled.button<{ info: string; color: string }>`
  width: 80px;
  background-color: rgba(7, 7, 36, 1);
  color: #c1c1c8;
  grid-column: 2;
  position: absolute;
  @media screen and (min-width: 768px) {
    &::before {
      content: " 02 INTERNAL";
      word-spacing: 14px;
    }
    grid-row: 2;
    position: inherit;
    grid-column: inherit;
    background-color: ${(props) =>
      props.info === "structure" ? `  ${props.color}` : ``};
    width: 100%;
    padding: 8px 0 7px 20px;
    display: flex;
    gap: 5px;
    font-size: 15px;
    line-height: 25px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    grid-column: 1/3;
    letter-spacing: 2.57px;
    color: rgba(255, 255, 255, 1);
    @media screen and (min-width: 1440px) {
      &:hover {
        cursor: pointer;
        background-color: #313148;
        color: white;
      }
    }
  }
`;
const Surface = styled.button<{ info: string; color: string }>`
  width: 80px;
  background-color: rgba(7, 7, 36, 1);
  color: #c1c1c8;
  grid-column: 3;
  position: absolute;
  @media screen and (min-width: 768px) {
    &::before {
      content: " 03";
      padding-right: 14px;
    }
    &::after {
      content: " GEOLOGY";
      padding-left: 4px;
    }
    grid-row: 3;
    position: inherit;
    grid-column: inherit;
    background-color: ${(props) =>
      props.info === "surface" ? `  ${props.color}` : ``};
    width: 100%;
    padding: 8px 0 7px 20px;
    font-size: 15px;
    line-height: 25px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    text-align: start;
    grid-column: 1/3;
    letter-spacing: 2.57px;
    color: rgba(255, 255, 255, 1);
    @media screen and (min-width: 1440px) {
      &:hover {
        cursor: pointer;
        background-color: #313148;
        color: white;
      }
    }
  }
`;

const OverviewBottomBorder = styled.div<{ info: string; color: string }>`
  width: 80px;
  height: 4px;
  background-color: ${(props) =>
    props.info === "overview" ? `  ${props.color}` : ``};
  position: relative;
  top: 24px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const StructureBottomBorder = styled.div<{ info: string; color: string }>`
  width: 80px;
  height: 4px;
  background-color: ${(props) =>
    props.info === "structure" ? `  ${props.color}` : ``};
  position: relative;
  top: 24px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const SurfaceBottomBorder = styled.div<{ info: string; color: string }>`
  width: 80px;
  height: 4px;
  background-color: ${(props) =>
    props.info === "surface" ? `   ${props.color}` : ``};
  position: relative;
  top: 24px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: 768px) {
    grid-row: 2;
    gap: 30px;
    padding: 0;
    width: 339px;
    align-items: start;
    @media screen and (min-width: 1440px) {
      grid-row: inherit;
    }
  }
`;
const PlanetName = styled.h1`
  color: #c1c1c8;
  font-family: "Antonio";
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 61px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 80px;
    line-height: 103.52px;
  }
`;
const Text = styled.p`
  color: #c1c1c8;
  font-size: 10.7px;
  text-align: center;
  line-height: 22px;
  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 13px;
  }
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
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: none;
    padding: 27px 0 36px 0;
    grid-column: 1/-1;
  }
  @media screen and (min-width: 1440px) {
    gap: 30px;
    padding: 60px 0 56px 0;
  }
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
  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: inherit;
    height: inherit;
  }
`;
const FirstChild = styled.p`
  font-size: 10px;
  line-height: 16px;
  opacity: 0.5;
  color: white;
  font-weight: 700;
  @media screen and (min-width: 1440px) {
    font-size: 13px;
    line-height: 25px;
  }
`;
const SecondChild = styled.p`
  color: rgba(255, 255, 255, 1);
  font-family: "Antonio";
  line-height: 25.88px;
  font-size: 20px;
  @media screen and (min-width: 1440px) {
    font-size: 40px;
    line-height: 51px;
  }
`;
const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    column-gap: 69px;
    justify-content: space-between;
    @media screen and (min-width: 1440px) {
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      column-gap: 220px;
      margin-top: 100px;
      row-gap: 26px;
      height: 790px;
    }
  }
`;
