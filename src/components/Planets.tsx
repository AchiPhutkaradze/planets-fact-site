import React, { Component } from "react";
import data from "../data.json";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function Planets() {
  const location = useParams();
  const currentPlanet = location.planet;
  console.log(currentPlanet);
  const correctPlanet = data.find((item) => item.name === currentPlanet);
  console.log(correctPlanet);
  return (
    <>
      <Container>{correctPlanet?.name}</Container>;
    </>
  );
}
const Container = styled.div`
  width: 120px;
  height: 50px;
  border: 2px solid;
`;
