import React from "react";
import styled from "styled-components";

const colors = {
  name: "defo",
  colorList: [
    { colorName: "TURQUOISE", hex: "#1abc9c", rgb: "rgb(26, 188, 156)" },
    { colorName: "EMERALD", hex: "#2ecc71", rgb: "rgb(46, 204, 113)" },
    { colorName: "PETER RIVER", hex: "#3498db", rgb: "rgb(52, 152, 219)" },
    { colorName: "AMETHYST", hex: "#9b59b6", rgb: "rgb(155, 89, 182)" },
    { colorName: "WET ASPHALT", hex: "#34495e", rgb: "rgb(52, 73, 94)" },
    { colorName: "GREEN SEA", hex: "#16a085", rgb: "rgb(22, 160, 133)" },
    { colorName: "NEPHRITIS", hex: "#27ae60", rgb: "rgb(39, 174, 96)" },
    { colorName: "BELIZE HOLE", hex: "#2980b9", rgb: "rgb(41, 128, 185)" },
    { colorName: "WISTERIA", hex: "#8e44ad", rgb: "rgb(142, 68, 173)" },
    { colorName: "MIDNIGHT BLUE", hex: "#2c3e50", rgb: "rgb(44, 62, 80)" },
    { colorName: "SUN FLOWER", hex: "#f1c40f", rgb: "rgb(241, 196, 15)" },
    { colorName: "CARROT", hex: "#e67e22", rgb: "rgb(230, 126, 34)" },
    { colorName: "ARIZARIN", hex: "#e74c3c", rgb: "rgb(231, 76, 60)" },
    { colorName: "CLOUDS", hex: "#ecf0f1", rgb: "rgb(236, 240, 241)" },
    { colorName: "CONCRETE", hex: "#95a5a6", rgb: "rgb(149, 165, 166)" },
    { colorName: "ORANGE", hex: "#f39c12", rgb: "rgb(243, 156, 18)" },
    { colorName: "PUMPKIN", hex: "#d35400", rgb: "rgb(211, 84, 0)" },
    { colorName: "POMEGRANATE", hex: "#c0392b", rgb: "rgb(192, 57, 43)" },
    { colorName: "SILVER", hex: "#bdc3c7", rgb: "rgb(189, 195, 199)" },
    { colorName: "ASBESTOS", hex: "#7f8c8d", rgb: "rgb(127, 140, 141)" },
  ],
};

const Wrapper = styled.div`
  height: 100%;
  background-color: white;
`;

const ColorWrapper = styled.div`
  height: 80%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

const ColorItem = styled.div`
  background-color: ${(props) => props.bg};
`;

const Name = styled.h4`
  color: black;
  font-size: 20px;
  font-weight: 600;
`;

const Bottom = styled.div``;

const Palette = ({ name }) => {
  console.log(name);
  return (
    <Wrapper>
      <ColorWrapper>
        {colors.colorList.map((color) => (
          <ColorItem key={color.colorName} bg={color.hex} />
        ))}
      </ColorWrapper>
      <Bottom>
        <Name>{name}</Name>
      </Bottom>
    </Wrapper>
  );
};

export default Palette;
