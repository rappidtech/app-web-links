import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Section from "./Section";
import ColorPicker from 'react-pick-color';

const ColorButton = ({bgcolor = '#ffffff', text = 'Color fondo', defaultColor = '#000000', onColorChange }) => {

    const [color, setColor] = useState(defaultColor);
    const [picker, setPicker] = useState(false);

    const handlePicker = () => {
        setPicker(!picker);
    }

    const pickerRef = useRef();

    useEffect(() => {

        const handleClickOutside = (event) => {
            if (pickerRef.current) {
                if (pickerRef.current === event.target) {
                        setPicker(false);
                    }
            }

        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [pickerRef]);

    return (
        <Section>
            <StyledDiv bgcolor={bgcolor}>
                <StyledP>{text}</StyledP>
                <StyledColorDiv>
                    <ColorDiv bgcolor={color} onClick={handlePicker}/>
                    <StyledP >{color}</StyledP>
                </StyledColorDiv>
            </StyledDiv>
            {
                !picker ? null : 
                <PickerContainer ref={pickerRef}>
                    <ColorPicker 
                        color={color} 
                        onChange={(color) => {
                            setColor(color.hex)
                            onColorChange(color.hex)
                        }} 
                        onClose={handlePicker}/>
                    <CloseButton onClick={handlePicker}>Cerrar</CloseButton>
                </PickerContainer>
            }
            
        </Section>
    );
}



const StyledDiv = styled.div`
    width: 100%;
    max-width: 320px;
    height: 100%;
    background-color: ${props => props.bgcolor};
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
`;

const StyledP = styled.p`
    padding: 5px;
    font-size: 0.8rem;
    text-align: center;
    margin: 0;
`

const StyledColorDiv = styled.div`
    border: 1px solid #818181;
    border-radius: 5px;
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100px;
`;

const ColorDiv = styled.div` 
    margin-left: 10px;
    width: 16px;
    aspect-ratio: 1;
    border: 1px solid #101010;
    background-color: ${props => props.bgcolor};
`;

const PickerContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CloseButton = styled.button`
    cursor: pointer;
    border: 1px solid #818181;
    border-radius: 10px ;
    color: #fff;
    background-color: #101010;
    padding: 3px 10px;
    margin-top: 10px;
`


export default ColorButton;