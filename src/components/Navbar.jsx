import React, { useState, useEffect, useRef } from 'react';
import Avatar from '../common/Avatar';
import Logo from '../common/Logo';
import PlanBanner from '../common/PlanBanner';
import Sidebar from '../common/Sidebar';
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Compartir from '../common/BotonCompartir';
import Content from "../content.json"
import styled, { keyframes } from 'styled-components';

const pages = Content.Header.pages;
const accountText = Content.Header.account;

const NavbarComponent = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [active, setActive] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0);
    const [account, setAccount] = useState('')

    const handleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const handleClick = (index) => {
        setActive(!active)
        setActiveIndex(index);
    }

    const ref = useRef()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref.current.contains(event.target)) {
                setIsSidebarOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <>  
            <Container>
                <Slide ref={ref}>
                    <Sidebar sidebarOpen={isSidebarOpen} setSidebarOpen={handleSidebar}/>
                </Slide>
                <Navbar style={{backgroundColor:'#F2F2F2'}} >
                    <Container>
                        <Navbar.Brand href="#"><Logo/></Navbar.Brand>
                        <PlanBanner/>
                        <div onClick={handleSidebar}>
                            <Avatar />
                        </div>
                    </Container>
                </Navbar>
            </Container>
            <Container>
                <Navbar className=''> 
                    <Container className='justify-content-center'>
                        <Nav style={pageNav} className="">
                            {pages.map((page, index) => {
                                
                                const isFirst = index === 0;
                                const isLast = index === pages.length - 1;
                                const isActive = index === activeIndex;

                                let linkStyle = isActive && isLast ? {...NavLinkLast, backgroundColor:'#E8DEF8'} :
                                 isActive && isFirst ? {...FirstNavLink, ...NavLinkStyle, backgroundColor:'#E8DEF8'} : 
                                 isActive ? {...NavLinkStyle, backgroundColor:'#E8DEF8'} : 
                                 isLast ? {...NavLinkLast, backgroundColor:'#A9A5B6'} :
                                 isFirst ? {...FirstNavLink, ...NavLinkStyle, backgroundColor:'#A9A5B6'} :
                                 {...NavLinkStyle,  backgroundColor:'#A9A5B6'};

                                return (
                                    <Nav.Link key={index} style={linkStyle} href="#" onClick={() => handleClick(index)}>{page}</Nav.Link>
                                )
                                })}
                        </Nav>
                    </Container>
                </Navbar>
            </Container>
            {account === 'Inactive' ? 
                (<Container className="container-md" style={InactiveAccount}>
                    <Container>
                        <p style={{margin:"0"}}>{accountText[0]}</p>
                    </Container>
                </Container>) : 
                (<Container className="container-md" style={ActiveAccount}>
                    <Container>
                        <p style={{margin:"0"}}>{accountText[1]}</p>
                    </Container>
                    <Compartir btnContent="Compartir" href="app.rappidtech.com/u/user"/>
                </Container>)
            }

        </>
    );
}

const slideOut = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
`;

const Slide = styled.div`
    animation: ${slideOut} 0.5s ease-in-out;
    
`;

const pageNav = {
    display: 'flex',
    // backgroundColor: '#A9A5B6',
    padding: '0 0rem',
    // border: '1px solid #79747E',
    width: '100%',
    maxWidth: '380px',
}

const FirstNavLink = {
    padding: '0.5rem 1.5rem 0 1rem',
    border: '1px solid #79747E',
    borderRadius: '0.5rem 0 0 0.5rem',
}

const NavLinkLast = {
    padding: '0.5rem 1.5rem 0 1rem',
    color: '#101010',
    width: '25%',
    textAlign: 'center',
    border: '1px solid #79747E',
    borderRadius: '0 0.5rem 0.5rem 0',
}

const NavLinkStyle = {
    border: '1px solid #79747E',
    padding: '0.5rem 0.2rem',
    color: '#101010',
    width: '25%',
    textAlign: 'center'
}

const InactiveAccount = {
    backgroundColor: '#F9DEDC',
    color: '#410E0B',
    width: '100%',
    maxWidth: '350px',
    borderRadius: '0.5rem',
    padding: '0.5rem 1rem'
}

const ActiveAccount = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#CCD6F7',
    color: '#101010',
    width: '100%',
    maxWidth: '350px',
    borderRadius: '0.5rem',
    padding: '0.5rem 1rem'
}
 

export default NavbarComponent;
