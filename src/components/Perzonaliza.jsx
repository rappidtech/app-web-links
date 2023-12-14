import React, { useState } from "react";
import Carrusel from "../common/Carrusel";
import Content from "../content.json";
import Title from "../common/TitleSection";
import Subtitle from "../common/SubtitleSection";
import Section from "../common/Section";
import ColorPicker from "../common/ColorPicker";

const Perzonaliza = ({ onChangeColor1, onChangeColor2, onChangeType, defaultCol1, defaultCol2,  }) => {

    const [picker, setPicker] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleColorChange = (newColor) => {
        onChangeColor1(newColor)
        onChangeColor2(newColor);
    };

    const handleColorChangeGrad1 = (newColor) => {
        onChangeColor1(newColor);
    };

    const handleColorChangeGrad2 = (newColor) => {
        onChangeColor2(newColor);
    };

    const onCarruselSelect = (item) => {
        setSelectedItem(item);
        if (item.title === 'Color Solido') {
            setPicker(true);
            onChangeType('solido')
        } else if (item.title === 'Gradiente vertical'){
            setPicker(false);
            onChangeType('vertical')
        } else {
            setPicker(false);
            onChangeType('horizontal')
        }
    };

    return (
        <Section>  
            <Title title={Content.Personaliza.title}/>
            <Subtitle title={Content.Personaliza.subtitle}/>
            <Carrusel onSelect={onCarruselSelect} Content={Content.Carrusel2}/>
            {
                picker ? (
                    <ColorPicker onColorChange={handleColorChange} defaultColor={defaultCol1}/>
                ) : (
                    <>
                        <ColorPicker onColorChange={handleColorChangeGrad1} bgcolor="#D5D5D5" defaultColor={defaultCol1} text="Gradiente Arriba"/>
                        <ColorPicker onColorChange={handleColorChangeGrad2} bgcolor="#D5D5D5" defaultColor={defaultCol2} text="Gradiente Abajo"/>
                    </>
                )
            }
        </Section>
    );
}

export default Perzonaliza;