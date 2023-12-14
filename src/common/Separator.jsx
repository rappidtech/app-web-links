import React from "react";
import styled from "styled-components";


function Separator() {
    return (
        <StyledDiv>
            <Divisor />
        </StyledDiv>
    );
}


const Divisor = styled.div`
    height: 1px;
    background-color: #cccccc; 
    width: 100%;
    max-width: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`;

export default Separator;