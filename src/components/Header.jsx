import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
    const navigate = useNavigate();
    return (
    <Container className="flex a-center j-between">
        <div className="logo">
            <img src={logo} alt="Logo"/>
        </div>
        <button onClick={() => {
            navigate(props.login ? "/signup" : "/login")
            }}>
            {props.login ? "Login" : "Sign in"}
        </button>
    </Container>
    );
    }

const Container = styled.div`
padding: 0 4rem;
.logo{
    img{
        height: 3rem;
    }
}
button{
    padding: 0.5rem 1rem;
    background-color: #fff
    border: none;
    cursor: pointer;
    color: #000;
    border-radius: 0.5rem;
    font-weight: bolder;
    font-size: 1.05rem;
}
`;
