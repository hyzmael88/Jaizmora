import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Logo0 from '../assets/img/logo0.png'
import Logo1 from '../assets/img/logo1.jpeg'
import Logo2 from '../assets/img/logo2.png'
import Logo3 from '../assets/img/logo3.png'
import Logo4 from '../assets/img/logo4.png'
import Logo5 from '../assets/img/logo5.png'
import Logo6 from '../assets/img/logo6.png'
import Logo7 from '../assets/img/logo7.png'
import Logo8 from '../assets/img/Logo8.png'
import Logo9 from '../assets/img/logo9.png'
import Logo10 from '../assets/img/logo10.png'
import Logo11 from '../assets/img/logo11.png'
import Logo12 from '../assets/img/logo12.png'
import Logo13 from '../assets/img/logo13.png'
import Logo14 from '../assets/img/logo14.jpg'
import Logo15 from '../assets/img/logo15.png'


export default function Exito() {
    return <div>
        <Container fluid>
            <p className='textoparrafo'>Algunos de nuestros</p>
            <h1 className='titulo'>Casos de éxito</h1>
            <br></br>
            <Row>
                <Col>
                <img src={Logo0} class="img-fluid" alt="Responsive image"></img>
                </Col>

                <Col>
                <img src={Logo1} class="img-fluid" alt="Responsive image"></img>
                </Col>

                <Col>
                <img src={Logo2} class="img-fluid" alt="Responsive image"></img>
                </Col>

                <Col>
                <img src={Logo3} class="img-fluid" alt="Responsive image"></img>
                </Col>
            </Row>
            <Row>
                <Col>
                <img src={Logo4} class="img-fluid" alt="Responsive image"></img>
                </Col>

                <Col>
                <img src={Logo5} class="img-fluid" alt="Responsive image"></img>
                </Col>

                <Col>
                <img src={Logo6} class="img-fluid" alt="Responsive image"></img>
                </Col>

                <Col>
                <img src={Logo7} class="img-fluid" alt="Responsive image"></img>
                </Col>
            </Row>
            <Row>
                <Col>
                <img src={Logo8} class="img-fluid" alt="Responsive image"></img>
                </Col>

                <Col>
                <img src={Logo9} class="img-fluid" alt="Responsive image"></img>
                </Col>

                <Col>
                <img src={Logo10} class="img-fluid" alt="Responsive image"></img>
                </Col>

                <Col>
                <img src={Logo11} class="img-fluid" alt="Responsive image"></img>
                </Col>
            </Row>
            <Row>
                <Col>
                <img src={Logo12} class="img-fluid" alt="Responsive image"></img>
                </Col>

                <Col>
                <img src={Logo13} class="img-fluid" alt="Responsive image"></img>
                </Col>

                <Col>
                <img src={Logo14} class="img-fluid" alt="Responsive image"></img>
                </Col>

                <Col>
                <img src={Logo15} class="img-fluid" alt="Responsive image"></img>
                </Col>
            </Row>
        </Container>
    </div>;
}
