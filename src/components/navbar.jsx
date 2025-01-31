import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavEx() {
    return (
        <Navbar expand="lg" className="bg-primary-subtle">
            <Container fluid>
                <Navbar.Brand href="#">OLX</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Form className="d-flex ">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>

                        {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Location"
                                className="me-2"
                                aria-label="Search"
                            /> */}
                        <NavDropdown title="English" id="navbarScrollingDropdown">

                            <NavDropdown.Item href="#action3">English</NavDropdown.Item>
                            <NavDropdown.Divider />

                            <NavDropdown.Item href="#action4">
                                Hindi                                </NavDropdown.Item>

                        </NavDropdown>
                        <div className='d-flex align-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" height={24} width={24}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>

                        <Nav.Link href="#action1">Login</Nav.Link>

                        {/* </Form> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavEx;