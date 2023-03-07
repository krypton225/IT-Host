import { Container, Navbar, Nav } from "react-bootstrap";

import navbarDataItemsLinks from "./navbar-data";

import { Logo } from "../../data/photos";

const MainNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="py-3" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="IT Host" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            navbarDataItemsLinks.map(({ id, text, url, hasButtonShape }) => (
                                <Nav.Link href={url} key={id}
                                    className={`${hasButtonShape ? "custom-link" : ""} mx-2 fw-semibold text-capitalize`}>
                                    {text}
                                </Nav.Link>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNavbar;