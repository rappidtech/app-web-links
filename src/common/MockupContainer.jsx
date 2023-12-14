import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import TitleSection from "./TitleSection";

const MockupContainer = ({bgcolor='#ffffff', width='300px', height='500px', right='20px', bottom='20px'}) => {

    const [showAvatar, setShowAvatar] = useState(true);
    const [showTitle, setShowTitle] = useState(true);
    const [showLinks, setShowLinks] = useState(false);

    return (
        <MockupContainerStyled bgcolor={bgcolor} width={width} height={height} right={right} bottom={bottom}>
            <AvatarContainer>
                <Avatar width="80px" show={showAvatar}/>
            </AvatarContainer>
            <TitleContainer>
                <TitleSection color="#fff" title="Usuario" align="center" show={showTitle} />
            </TitleContainer>
        </MockupContainerStyled>
    );
}

const MockupContainerStyled= styled.div`
    position: fixed;
    bottom: ${props => props.bottom};
    right: ${props => props.right};
    z-index: 5;
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 2px solid #101010;
    background: ${props => props.bgcolor};
    border-radius: 20px;
    background-size: cover;
    background-repeat: no-repeat;  
`;

const AvatarContainer = styled.div`;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    padding: 10px;
    margin-top: 10%;
`;

const TitleContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    padding: 10px;
`;

export default MockupContainer;