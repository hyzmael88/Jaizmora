import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import './style.css'

export default function Work() {
    return <div >
        <Container id='workcontainer' fluid className='d-flex text-center' >
            <Row >
                <Col md={12} className='align-self-center' >
                    <br></br>
                    <br></br>
                    <h1 id='' className='titulo  mt-5  '>
                        How we work?
                    </h1>
                    <p id='' className='textoparrafo '>
                    Nuestro modelo de trabajo cuenta con 5 pasos para generar una estrategia exitosa, innovadora y creativa.
            </p>

                </Col>
            </Row>
        </Container>
    </div>;
}
