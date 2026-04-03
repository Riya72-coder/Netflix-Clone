import React from 'react'
import{Container,Navbar,Nav} from "react-bootstrap"
import{NavLink} from 'react-router-dom'

export const Header = () => {

    return(
        <>
        <Navbar expand="lg" bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href="#home">Movie-Blogs-by-RK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="blog">Blog</Nav.Link>
            <Nav.Link as={NavLink} to="about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}