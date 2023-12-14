import React from "react";
import styled from "styled-components";
import Content from "../content.json"

const avatar = Content.Header.avatar;

const Avatar = ({width='44px', show=true}) => {
    return (
        <div> 
            { 
                show ? <img width={width} src={avatar} alt="" /> : null
            }

        </div>
    );
}

const StyledImg = styled.img`
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
`;



export default Avatar;
