import React from "react";
import styled, {keyframes} from "styled-components";
import Avatar from "./Avatar";
import ButtonRappid from "./ButtonRappid";
import Content from "../content.json"
import Tema from "./Tema.jsx"


const SidebarComponent = ({ sidebarOpen, setSidebarOpen  }) => {

    const user = '@agustinaprado19'
    const email = 'rappidtech.com/links/usuario'
    const side = Content.Sidebar

    return (
        <>
            {sidebarOpen && (
                <>
                    <Sidebar>
                        <AvatarContainer onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <Avatar />
                        </AvatarContainer>
                        <SidebarContent>
                            <Profile>
                                <p>{user}</p>
                                <p>{email}</p>
                                <ButtonRappid/>
                            </Profile>
                            <Menu>
                                {side.menu.text.map((item, index) => (
                                    <Li key={index}>
                                        <img src={side.menu.icons[index]} alt={item}/>
                                        {item}
                                    </Li>
                                ))}
                            </Menu>
                            <Bottom>
                                <Tema/>
                                {side.bottom.text.map((item, index) => (
                                    <Li key={index}>
                                        <img src={side.bottom.iconCerrar[index]} alt={item}/>
                                        {item}
                                    </Li>
                                ))}
                            </Bottom>
                        </SidebarContent>
                    </Sidebar>
                </>
            )}
        </>
    );
}

const slideIn = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

const Sidebar = styled.div`
    z-index: 2000;
    position: fixed;
    display: flex;
    flex-direction: column;
    right: 0;
    top: 0;
    width: 80%;
    height: 100%;
    background-color: #D9D9D9;
    transition: transform 0.6s ease-in-out;
    transform: translateX(0);
    animation: ${slideIn} 0.4s ease-in-out;
`;

const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 8px 24px;
    margin-bottom: 8px;
    height: 100%;
`;

const AvatarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 8px 24px;

`;

const Li = styled.li`
    display: flex;
    align-items: center;
    padding: 8px 0px;
    margin: 8px 0px;
    border-radius: 50px;
    cursor: pointer;
    list-style: none;
    img {
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }
`;

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 50px;
`;

const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-left: 0px;
    margin-bottom: 8px;
    list-style: none;
`;

const Bottom = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    padding-left: 0px;
    margin-bottom: 8px;
    list-style: none;
    
`;

export default SidebarComponent;