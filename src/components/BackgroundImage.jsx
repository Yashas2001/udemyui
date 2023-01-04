import React from "react";
import background from "../assets/login.jpg";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
        <img src={background} alt="Background"/>
    </Container>
  );
}

const Container = styled.div`
    hieight: 100vh;
    width: 100vw;
    img{
        height: 100vh;
        width: 100vw;
    }
`;