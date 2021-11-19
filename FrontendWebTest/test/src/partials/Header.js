import React from 'react'
import {Navbar,Nav,Container,Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        //Sayfaların başlığı
        <header>
           <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" fixed="top" >
            <Container fluid className="py-2">
            <Navbar.Brand className="px-5"><Link to="/" className="text-light" style={{ textDecoration: 'none'}}>BulutMD</Link></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link className="text-light px-3" href="#giriş">Giriş</Nav.Link>
                 <Form className="d-flex">
                    <Button variant="danger">Deneme Başlat</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>            

        </header>
    )
}
export default Header; 