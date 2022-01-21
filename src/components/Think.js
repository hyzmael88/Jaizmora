import React from 'react';

import TrianguloNaranja3 from '../assets/img/triangulonaranja3.png'
import TrianguloNegro3 from '../assets/img/triangulonegro3.png'
import ThinkFoto from '../assets/img/thinkfoto.png'
import { Container, Image, Row } from 'react-bootstrap';


export default function Think() {
  return <div>
    <Image id='triangulonaranja3' src={TrianguloNaranja3}></Image>
    <Image id='triangulonegro3' src={TrianguloNegro3}></Image>
    <Image id='thinkfoto' src={ThinkFoto}></Image>
    <h1 id='generamos' className="text-right">generamos experiencias<br></br>
      de valor<br></br>
      y alto impacto para<br></br>
      nuestros clientes, marcas<br></br>
      y consumidores.<br></br>
    </h1>


  </div>;
}
