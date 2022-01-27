import React from 'react';

import TrianguloNaranja3 from '../assets/img/triangulonaranja3.png'
import TrianguloNegro3 from '../assets/img/triangulonegro3.png'
import ThinkFoto from '../assets/img/thinkfoto.png'
import { Col, Container, Image, Row } from 'react-bootstrap';


export default function Think() {
  return <div>
    <Container fluid id='thinkcontainer' >
    <Row  >
      <Col md={8} >
      {/* <Image id='triangulonaranja3' className='img-fluid' src={TrianguloNaranja3}></Image>
    <Image id='triangulonegro3' className='img-fluid'src={TrianguloNegro3}></Image>
    <Image id='thinkfoto' className='img-fluid'src={ThinkFoto}></Image>  */}
      </Col>
      <Col md={4} className='text-left'>
     
      <h1 id='generamos' className='mr-4 mt-4'>
      How we think?
    </h1>
    <p id='necesidades' className='mr-4'>
              Tomamos las necesidades de aquellos <br></br>
              líderes que buscan maximizar la relevancia e<br></br>
              influencia de su marca con la audiencia y les<br></br>
              brindamos soluciones estratégicas, creativas,<br></br>
              innovadoras, de alto impacto y exitosas.<br></br>
            </p>
 
      </Col>
    </Row>
    </Container>
   

  </div>;
}
