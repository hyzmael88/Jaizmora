import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

export default function Steps() {
  return <div>
      <Container fluid id='stepscontainer'>
          <h1 className='titulo mt-4'>STEPS FOR THE SUCCESS</h1>
          <Row className='mt-4' id='stepsrow'>
              <Col className='fondostepsnegro' id='conocemossteps'>
              <h4 className='titulostepsnaranja'>CONOCEMOS</h4>
              <p className='textosteps'>
              Escuchamos e identificamos tus necesidades, para entenderlas y así poder resolverlas.
              </p>
              </Col>
              <Col className='fondostepsnaranja' id='planteamossteps'>
              <h4 className='titulostepsnegro'>PLANTEAMOS IDEAS</h4>
              
              <p className='textosteps'>Ponemos en práctica la investigación y brindamos un concepto creativo y soluciones precisas a lo que tu marca necesita.</p>
              </Col>
              <Col className='fondostepsnegro' id='producimossteps'>
              <h4 className='titulostepsnaranja'>PRODUCIMOS</h4>
              <p className='textosteps'>Elaboramos y recopilamos el material para dar pie a la estrategia de marca.</p>
              </Col>
              <Col className='fondostepsnaranja' id='ejecutamossteps'> 
              <h4 className='titulostepsnegro'>EJECUTAMOS</h4>
              <p className='textosteps'>Ponemos en marcha la estrategia y generamos tanto experiencias como relaciones de tu marca con la audiencia en distintos medios y plataformas digitales.</p>
              </Col>
              <Col className='fondostepsnegro' id='verificamossteps'>
              <h4 className='titulostepsnaranja'>VERIFICAMOS</h4>
              <p className='textosteps'>Monitoreamos el alcance de la estrategia, así como medimos los insights de la campaña.</p>
              </Col>
          </Row>
      </Container>
  </div>;
}
