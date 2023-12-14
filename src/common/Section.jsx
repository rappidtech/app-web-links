import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Section = ( {children} ) => {
    return (
        <Container>
            <Container>
                <StyledSection>
                    {children}
                </StyledSection>
            </Container>
        </Container>
    );
    }

const StyledSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;
    max-width: 380px;
`

export default Section;