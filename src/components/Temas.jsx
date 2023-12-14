import React, { useState } from "react";
import Carrusel from "../common/Carrusel";
import Content from "../content.json";
import Title from "../common/TitleSection";
import Subtitle from "../common/SubtitleSection";
import Section from "../common/Section";

const Temas = ({ onChangeImage }) => {

    const [selectedItem, setSelectedItem] = useState(null);

    const onCarruselSelect = (item) => {
        setSelectedItem(item);
        onChangeImage(item.img)

    };

    return (
        <Section>  
            <Title title={Content.Temas.title}/>
            <Subtitle title={Content.Temas.subtitle}/>
            <Carrusel onSelect={onCarruselSelect} Content={Content.Carrusel1}/>
        </Section>
    );
}

export default Temas;