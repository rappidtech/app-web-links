import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Content from "../content.json"

const planBanner = Content.Header.planBanner;

const PlanBanner = () => {
    return (
        <StyledDiv> 
            <StyledImg src={planBanner.icon} alt="" />
            <StyledP>{planBanner.text}</StyledP>
        </StyledDiv>
     );
}

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F3EC54;
    color: #101010;
    padding: 5px 5px;

`;

const StyledImg = styled.img`
    width: 20px;
    aspect-ratio: 1/1;
    object-fit: cover;
`;

const StyledP = styled.p`
    margin 0;
`;

export default PlanBanner;
