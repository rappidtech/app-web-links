import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Temas from "../components/Temas";
import Perzonaliza from "../components/Perzonaliza";
import Separator from "../common/Separator";

import ViewButton from "../common/ViewButton";

const Fondo = () => {

    const [color1, setColor1] = useState('#101010');
    const [color2, setColor2] = useState('#ffffff');
    const [type, setType] = useState('solido');

    const [image, setImage] = useState(null);

    const handleChangeColor1 = (newColor) => {
        setColor1(newColor);
        setImage(null); // Restablece la imagen a null
    };

    const handleChangeColor2 = (newColor) => {
        setColor2(newColor);
        setImage(null); // Restablece la imagen a null
    };

    const handleType = (newType) => {
        setType(newType);
        handleChangeColor1(color1);
        handleChangeColor2(color2);
    }

    return (
        <>  
            <Navbar/>
            <Temas onChangeImage={setImage}/>
            <Separator/>
            <Perzonaliza 
                defaultCol1={color1} 
                defaultCol2={color2} 
                onChangeColor1={handleChangeColor1} 
                onChangeColor2={handleChangeColor2} 
                onChangeType={handleType}/>            
            <ViewButton 
                backgroundImage={image} 
                mockupColor1={color1} 
                mockupColor2={color2} 
                mockupType={type}/>
        </>
    );
}



export default Fondo;