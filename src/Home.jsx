import React from "react";
import styled from "styled-components";
import Fondo from "./Pages/Fondo";
import Header from "./Pages/Header";
import Links from "./Pages/Links";
import Redes from "./Pages/Redes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = () => {

    return (
        <Router>
            <Routes> 
                <Route path="/fondo" element={<Fondo />} />
                {/* <Route path="/header" element={<Header />} />
                <Route path="/links" element={<Links />} />
                <Route path="/redes" element={<Redes />} /> */}
            </Routes>
        </Router>
    );
}


export default Home;
