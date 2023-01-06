import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.png';
import navIcon2 from '../assets/img/nav-icon2.png';

export const NavBar = () => {
    // const {activeLink, setActiveLink} = useState('home');
    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const onScroll = () => {
    //         if (window.scrollY > 50) {
    //             setScrolled(true);
    //         }else {
    //             setScrolled(false);
    //         }
    //     }

    //     window.addEventListener("scroll", onScroll);

    //     return () => window.removeEventListener("scroll", onScroll);
    // }, [])

    // const onUpdateActiveLink = (value) => {
    //     setActiveLink(value);
    // }

    return(
        <NavBar expand='lg'>
            <p> Hello I am also working</p>
                         {/* className={scrolled ? "scrolled": ""}
      
            <Container>
                <Navbar.Brand href='#home'>
                    <img src={''} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#aboutMe'>About Me</Nav.Link>
                        <Nav.Link href='#projects'>Projects</Nav.Link>
                    </Nav>
                    {/* className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdateActiveLink('projects')} */}
                    {/* <span className="navbar-text">
                        <div className="social-icons">
                            <a href='https://github.com/MakennaLebo'> This One</a>
                             <img src={navIcon1} alt="" /> 
                            <a href='https://www.linkedin.com/in/makennalebo/'> <img src={navIcon2} alt="" /></a>
                        </div>
                    </span>
                </Navbar.Collapse>  
    </Container> */}
        </NavBar>
    )
}