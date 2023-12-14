import React from "react";
import styled from "styled-components";

const SubtitleSection = ({title}) => {
    return (
        <StyledH5>{title}</StyledH5>
    );
}

const StyledH5 = styled.h5`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    font-size: 0.8rem;
`

export default SubtitleSection;