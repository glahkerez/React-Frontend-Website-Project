import React, { Component } from 'react'
import { Container,Row,CardGroup,Col,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

 class Birsayfa extends Component {
    render() {
        return (
            //Anasayfada Bulunan İki Başlık
            <div>
                <Container fluid style={{ px: 100}}>
                    <Row>
                        <CardGroup expand="lg">     
                            <Col lg={2} className=" p-5">
                                <Link to="/filmler"style={{ textDecoration: 'none' }}>
                                    <img src="https://streamcoimg-a.akamaihd.net/000/958/725/958725-PosterArt-96c5bbb6e15269f5b5cd9bc7801de1d9.jpg" className="card-img-top" alt="Film" />
                                    <Card.Body>
                                    <h4 className="text-justify text-dark">Film</h4>
                                    </Card.Body>
                                </Link>
                            </Col>
                            <Col lg={2} className="p-5">
                                <Link to="/diziler"style={{textDecoration: 'none'}}>
                                    <Card.Img variant="top" src="dizi.jpg" alt="Dizi"/>
                                    <Card.Body>
                                    <h4 className="text-justify text-dark">Dizi</h4>
                                    </Card.Body>
                                </Link>
                            </Col>
                        </CardGroup>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Birsayfa;