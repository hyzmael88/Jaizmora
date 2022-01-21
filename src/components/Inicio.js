import React from 'react';
import Fondo from '../assets/img/fondo.png'
import LogoNaranja from '../assets/img/logo-naranja.png'
import DigitalMedia from '../assets/img/digitalmedia.png'
import TrianguloNaranja from '../assets/img/triangulonaranja.png'
import TrianguloNegro from '../assets/img/triangulonegro.png'

import {Image} from 'react-bootstrap';

import './style.css'


export default function Inicio() {
  return <div>
    <Image fluid id='fondo' src={Fondo}></Image>
    <Image id='logonaranja' src={LogoNaranja}></Image>
    <Image id='digitalmedia' src={DigitalMedia}></Image>
    <Image id='triangulonaranja' src={TrianguloNaranja}></Image>
    <Image id='triangulonegro' src={TrianguloNegro}></Image>

  </div>;
}
