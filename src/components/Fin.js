import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';


export default function Fin() {
    return <div>
        
        <Container fluid className='text-center' id='fincontainer'>
            
            <Row className='mt-4'>
                <h1 className='titulo mt-4'>Are you ready to start?</h1>
                <p className='dejanostexto'>Déjanos apoyarte con una propuesta estratégica que se adapte a las necesidades de tu marca.
                    <br></br>
                    Contáctanos y pide tu cotización.</p>
                    
                <Col  className='mt-4'>
                    <h4 className='titulo'>Dirección</h4>
                    <p className='dejanostexto'>Av. Ejército Nacional #225, CDMX.</p>
                </Col>
                <Col  className='mt-4'>
                    <h4 className='titulo'>Teléfono </h4>
                    <p className='dejanostexto'>55 44 34 44 78<br></br>
                        55 40 23 34 79</p>

                </Col>
                <Col  className='mt-4'>
                    <h4 className='titulo'>E-mail</h4>
                    <p className='dejanostexto'>jaizmorateam@gmail.com</p>

                </Col>
            </Row>
        </Container>
    </div>;
}
