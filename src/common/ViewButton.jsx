import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Content from "../content.json";
import MockupContainer from "./MockupContainer";

const ViewButton = ({
    bgcolor='#A84AC9', 
    mockupColor1="#fff", 
    mockupColor2="#fff", 
    mockupType="solido",
    backgroundImage
}) => {

    const [showIcons, setShowIcons] = useState(false);

    const [showMobile, setShowMobile] = useState(false);
    const [showTablet, setShowTablet] = useState(false);
    const [showLaptop, setShowLaptop] = useState(false);

    const handleClick = () => {
        setShowIcons(!showIcons);
    };

    const handleMockup = (i) => {
        
        switch (i) {
            case 0:
                setShowMobile(!showMobile);
                setShowTablet(false);
                setShowLaptop(false);
                break;
            case 1:
                setShowTablet(!showTablet);
                setShowMobile(false);
                setShowLaptop(false);
                break;
            case 2:
                setShowLaptop(!showLaptop);
                setShowMobile(false);
                setShowTablet(false);
                break;
            default:
                setShowMobile(false);
                setShowTablet(false);
                setShowLaptop(false);
        }
    }

    const mockupRef = useRef();
    

    useEffect(() => {
        const handleClickOutside = (event) => {
            
            if (mockupRef.current === event.target ) {
                    setShowIcons(false);
                    setShowMobile(false);
                    setShowTablet(false);
                    setShowLaptop(false);
            }

        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [mockupRef]);

    const bottom = (i) => {
        return `${i*70}px`
    }

    const icons = Content.Views

    let mockupColor = mockupColor1

    if (mockupType === 'solido') {
        mockupColor = mockupColor1;
    } else if (mockupType === 'vertical') {
        mockupColor = `linear-gradient(180deg, ${mockupColor1} 0%, ${mockupColor2} 100%)`;
    } else {
        mockupColor = `linear-gradient(90deg, ${mockupColor1} 0%, ${mockupColor2} 100%)`;
    }

    if (backgroundImage) {
        mockupColor = `url(${backgroundImage})`;
    }

    return (
        <>  
            {showIcons && (
                <IconsContainer>
                    {
                        icons.map((icon, i) => (
                            <StyledButton key={i} witdh={'45px'} bottom={bottom(i+2)} bgcolor={bgcolor} onClick={() => handleMockup(i)}>
                                <img src={icon.src} alt={icon.alt}/>
                            </StyledButton>
                        ))
                    }
                </IconsContainer>
            )}
            {(showMobile || showLaptop || showTablet) && (
                <StyledDiv ref={mockupRef}>
                    {showMobile && (
                        <MockupContainer bgcolor={mockupColor} bottom={'15%'} right= {'15%'} width= {'70%'} height={'70%'}/>
                        )}
                    {showTablet && (
                        <MockupContainer bgcolor={mockupColor} bottom={'25%'} right= {'10%'} width= {'80%'} height={'60%'}/>
                        )}
                    {showLaptop && (
                        <MockupContainer bgcolor={mockupColor} bottom={'40%'} right= {'2.5%'} width= {'95%'} height={'30%'}/>
                        )}
                </StyledDiv>
                )
            }
        
            <StyledButton witdh={'50px'} bottom={bottom(1)} bgcolor={bgcolor} onClick={handleClick}>
                <img src="./img/svg/showW.svg" />
            </StyledButton>
        </>
    );
}

const slideUp = keyframes`
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

const StyledButton = styled.button`
    position: fixed;
    bottom: ${props => props.bottom};
    width: ${props => props.witdh};
    aspect-ratio: 1/1;
    right: 20px;
    border: none;
    background-color: ${props => props.bgcolor};
    padding: 5px 10px;
    border-radius: 20px;
    cursor: pointer;
    animation: ${slideUp} 0.5s ease-out;
    animation-delay: 0;
    z-index: 1000;
`;

const IconsContainer = styled.div`
    position: fixed;
    z-index: 1000;
    bottom: 120px; 
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledDiv = styled.div`
    background-color: rgb(0,0,0,0.4);
    position: fixed;
    display: ${props => props.display};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
`;


export default ViewButton;

