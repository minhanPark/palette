import React from "react";
import { Link } from "react-router-dom";
import GlobalStyle from "./components/Global";
import Header from "./components/Header";
import Palette from "./components/Palette";
import styled from "styled-components";
import colors from "./colors";

const PaletteContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 300px 300px;
  gap: 30px;
`;

const SLink = styled(Link)`
  display: block;
  padding: 9px 10px;
  background-color: white;
  text-decoration: none;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <PaletteContainer>
        {colors.map((color) => (
          <SLink to={`/palette/${color.name}`} key={color.name}>
            <Palette {...color} />
          </SLink>
        ))}
      </PaletteContainer>
    </>
  );
}

export default App;
