import React, { useState } from "react";
import styled from "styled-components";

const Compartir = ({btnContent, href}) => {

    const [copied, setCopied] = useState(btnContent);
    
    const copyToClipboard = (e) => {
        e.preventDefault(); 
        navigator.clipboard.writeText(href)
            .then(() => {
                setCopied('Copiado');
            })
            .catch(err => {
                console.error('Error al copiar al portapapeles: ', err);
            });
    };   

    if (copied === 'Copiado') {
        setTimeout(() => {
            setCopied(btnContent);
        }, 3000);
    }


    return (
        <StyledButton onClick={copyToClipboard} >{copied}</StyledButton>        
    );
}

const StyledButton = styled.button`
    border: none;
    color: #101010;
    background-color: #EDDAF4;
    padding: 5px 10px;
    border-radius: 50px;
    width: 100px;
    

    &:hover, active{
        background-color: #DC7BFF;
    }
`;


export default Compartir;
