import React, { Fragment } from 'react';

import TrianguloNaranja from '../assets/img/triangulonaranja.png'
import TrianguloNegro from '../assets/img/triangulonegro.png'
import { Col, Container, Image, Row } from 'react-bootstrap';


export default function Somos() {
  return <Fragment >
    <Container fluid id="somoscontainer">
      <Row>
        <br></br>
        <Col md={12}>
        <div className='text-left'>
            
            <p id='somos' className='mt-5'>Somos JAIZMORA,</p>
            <br></br>
            <h1 id='generamos'>generamos experiencias<br></br>
              de valor<br></br>
              y alto impacto para<br></br>
              nuestros clientes, marcas<br></br>
              y consumidores.<br></br>
              <p id='guion'></p>
            </h1>
          </div>
        </Col>
          
{/*          
        <Image id='triangulonaranja2' className='img-fluid' src={TrianguloNaranja}></Image>
          
          <Image id='triangulonegro2'  className='img-fluid' src={TrianguloNegro}></Image> 
           */}

          
      </Row>
    </Container>
  </Fragment>;
}
