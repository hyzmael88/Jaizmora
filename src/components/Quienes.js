import React from 'react';

import QuienesImg from '../assets/img/quienesimg.png'


import { Container, Row, Col } from 'react-bootstrap';
import {Image} from 'react-bootstrap';


export default function Quienes() {
  return <div>
    <Container >
      <br></br>
      <Row>

        <Col m={10} >
          <div className='text-left '>
            <h1 id='who' >Who are we?</h1>

            <p id='mensaje'>Hola,<br></br>Queremos que el mensaje de tu<br></br>marca, sea escuchado.</p>
            <br></br>
            <p id='necesidades'>
              Tomamos las necesidades de aquellos <br></br>
              líderes que buscan maximizar la relevancia e<br></br>
              influencia de su marca con la audiencia y les<br></br>
              brindamos soluciones estratégicas, creativas,<br></br>
              innovadoras, de alto impacto y exitosas.<br></br>
            </p>

          </div>
        </Col>
        <Col m={2} className='text-right'>
        <Image id='quienesimg' src={QuienesImg}></Image>

        </Col>
      </Row>

    </Container>
  </div>;
}
