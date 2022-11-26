import { Container, Navbar, NavbarBrand } from "react-bootstrap";

export const Header = () => {
    return (
        <Navbar variant="dark" bg="primary">
            <Container fluid>
                <NavbarBrand>Custom Select Input</NavbarBrand>
            </Container>
        </Navbar>
    );
};
