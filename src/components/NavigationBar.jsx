import {Container, Nav, Navbar} from "react-bootstrap";
export default function NavigationBar(){
    return <Navbar bg="light" data-bs-theme="light" style={{height: "6vh"}}>
        <Container>
            <Navbar.Brand href="#home">HGIS</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link>Highschool Geagraphic Information System</Nav.Link>
            </Nav>
        </Container>
    </Navbar>;
}