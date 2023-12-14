import React, { useState } from 'react';
import styled from 'styled-components';
import Content from '../content.json';

const ThemeToggleButton = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isLightTheme, setIsLightTheme] = useState(true); 

    const toggleDarkTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        setIsLightTheme(!isLightTheme);
    };

    const toggleLightTheme = () => {
        setIsLightTheme(!isLightTheme);
        setIsDarkTheme(!isDarkTheme);
    };

    const theme = Content.Theme

    return (
        <ToggleButton>
            <IconSun active={isDarkTheme} onClick={toggleDarkTheme}>
                <Img src={theme.lightImg}/>
            </IconSun>
            <IconMoon active={isLightTheme} onClick={toggleLightTheme}>
                <Img src={theme.darkImg}/>
            </IconMoon>
        </ToggleButton>
    );
};

const ToggleButton = styled.button`
    background-color: #B9B9B9;
    display: flex;
    justify-content: space-around;
    width: 120px;
    padding: 5px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 50px;
`;

const IconSun = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    width: 50px;
    height: 30px;
    margin-right: 4px;
    background-color: ${({ active }) => (active ? Content.Theme.colorOn : Content.Theme.colorOff)};
`;

const IconMoon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    width: 50px;
    height: 30px;
    background-color: ${({ active }) => (active ? Content.Theme.colorOn : Content.Theme.colorOff)};

`;

const Img = styled.img`
    width: 20px;
    height: 20px;
    margin: 2px;
`;

export default ThemeToggleButton;
