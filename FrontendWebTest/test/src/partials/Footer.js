import React from 'react'
import { Nav, Image } from 'react-bootstrap'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        //Sayfaların alt bilgi kısmı 
        <footer className="clearfix">
            <div className="main-footer">
                <div className="footer mt-auto py-3 px-5 bg-dark text-white" >
                    <div className="row">
                        <Nav className="me-auto">
                            <Link to="/" className="text-light p-2" style={{ textDecoration: 'none' }}>AnaSayfa</Link>
                            <div className="py-2">|</div>
                            <Nav.Link className="text-light" href="#kullanıcı">Kullanıcı Sözleşmesi</Nav.Link>
                            <div className="py-2">|</div>
                            <Nav.Link className="text-light" href="#gizlilik">Gizlilik Sözleşmesi</Nav.Link>
                        </Nav>
                        {/*Footer Bottom*/}
                        <div className="footer-bottom">
                            <Nav className="me-auto">
                                <Nav.Link href="#fc">
                                    <Image
                                        src="logofb.png"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                        alt="Facebook Sayfası"
                                    />
                                </Nav.Link>
                                <Nav.Link className="px-3" href="#tw">
                                    <Image
                                        src="/logotw.png"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                        alt="Twitter Sayfası"
                                    />
                                </Nav.Link>
                            </Nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
