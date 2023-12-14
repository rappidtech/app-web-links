import React from "react";
import styled from "styled-components";
import Content from "../content.json"

const ButtonRappid = ({ text=Content.Sidebar.btn, onClick }) => {
    return (
        <>
            <Button onClick={onClick}>{text}</Button>
        </>
    );
}

const Button = styled.button`
    background-color: transparent; 
    border: none;
    color: #101010;
    padding: 8px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    border-radius: 50px;
    cursor: pointer;
    border: 1px solid #A84AC9;
`;

export default ButtonRappid;
