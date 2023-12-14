import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Content from "../content.json"

const logo = Content.Header.logo;

const Logo = () => {
    return (
        <div> 
            <img src={logo} alt="" />
        </div>
    );
}

const StyledImg = styled.img`
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
`;

const StyledLogo = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    a {
        color: inherit;
    }
`;

export default Logo;
