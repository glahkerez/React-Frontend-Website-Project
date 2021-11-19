import React from 'react'
import {Navbar, Container,} from 'react-bootstrap'

const Poptitle = () => {
    return (
        //Sayfaların Popüler Başlık Yazan Barı
        <div>
            <br/>
            <br/>
            <br/>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="secondary" style={{position:'relative'}} >
                <Container fluid className="py-2">     
                    <Navbar.Brand className="px-5" >Popüler Başlıklar</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    ) 
}
export default Poptitle;