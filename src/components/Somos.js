import React, { Fragment } from 'react';

import TrianguloNaranja from '../assets/img/triangulonaranja.png'
import TrianguloNegro from '../assets/img/triangulonegro.png'
import { Container, Image, Row } from 'react-bootstrap';


export default function Somos() {
  return <Fragment>
    <Container>
      <Row>
        <br></br>
        <div id='contenedorSomos'>
          {/* <Image id='triangulonaranja2' src={TrianguloNaranja}></Image> */}
          <svg height="210" width="250">
            <polygon points="250,0 250,210 160,210" style="fill:#FF2942;stroke:black;stroke-width:1" />
          </svg>
          {/* <Image id='triangulonegro2' src={TrianguloNegro}></Image> */}

          <div className='text-left'>
            <p id='somos'>Somos JAIZMORA,</p>
            <br></br>
            <h1 id='generamos'>generamos experiencias<br></br>
              de valor<br></br>
              y alto impacto para<br></br>
              nuestros clientes, marcas<br></br>
              y consumidores.<br></br>
              <p id='guion'></p>
            </h1>
          </div>
        </div>
      </Row>
    </Container>
  </Fragment>;
}
