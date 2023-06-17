import React, { useState,useEffect } from "react";
import {Navbar, Container} from "react-bootstrap";

import { Nav } from "react-bootstrap";
import logo from "../assets/logo.svg";
import navicon1 from "../assets/nav-icon1.svg";
import navicon2 from "../assets/nav-icon2.svg";
import navicon3 from "../assets/nav-icon3.svg";

export const NavBar = () => {

  const [activeLink,setActiveLink] = useState('home');
  const [scrolled,setScrolled] = useState(false);

  useEffect  (() =>{
    const onScroll = () =>{
      if(window.scrollY){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  },[])

  const onUpdateActiveLink = (value) =>{
    setActiveLink(value)
  }
  

  return (
    <Navbar  expand="lg" className={scrolled? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" width="80px" height="80px"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? 'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? 'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? 'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text"> 
            <div className="social-icon">
                <a href=""><img src={navicon1} alt="logo"></img></a>
                <a href=""><img src={navicon2} alt="logo" ></img></a>
                <a href=""><img src={navicon3} alt="logo" ></img></a>
            </div>
            <button className="vvg" onClick={()=> console.log("Hello There")}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
