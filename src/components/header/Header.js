import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <Container>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand to="/Assignment1/">BlogPost</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link as={Link} to="/Assignment1/posts">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}

export default Header
