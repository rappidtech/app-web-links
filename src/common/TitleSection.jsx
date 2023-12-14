import React from "react";
import styled from "styled-components";

const TitleSection = ({title, align="left", color="#212529", show=true}) => {
    return (
        <>
            {
                show ? <StyledH2 color={color} align={align} >{title}</StyledH2> : null
            }
        </>
        
    );
}

const StyledH2 = styled.h2`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align};
    justify-content: center;
    font-size: 1rem;
    color: ${props => props.color};
`

export default TitleSection;