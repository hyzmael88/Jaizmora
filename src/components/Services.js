import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';


export default function Services() {
    return <div>
        <Container fluid className='text-center mt-4'>
            <h1 className='titulo'>Our services</h1>
            <p className='textoparrafo'>¿Qué es lo que necesita tu marca?</p>
            <Row className='mt-4'>
                <Col>
                    <h4 className='titulo'>Paginas web</h4>
                    <br></br>

                    <p className='mt-3 textoparrafo'>
                        - Arquitectura del sitio web desde el frontend hasta el backend.<br></br>
                        - Sitios responsive.<br></br>
                        -Blog, E-commerce, CMS, etc.</p>

                </Col>
                <Col>
                    <h4 className='titulo'>Fotografía y video</h4>
                    <br></br>
                    <p className='mt-3 textoparrafo'>
                        -Levantamiento de imagen a producto o persona.<br></br>
                        - Edición de fotografía y video.<br></br>
                        - Video institucional
                    </p>
                </Col>
                <Col>
                    <h4 className='titulo'>Audio</h4>
                    <br></br>
                    <p className='mt-3 textoparrafo'>
                        - Grabación y edición de voz en off.<br></br>
                        - Guión y grabación de locución comercial.<br></br>
                        - Elaboración de podcasts.
                    </p>
                </Col>
                <Col>
                    <h4 className='titulo'>Manejo de redes sociales</h4>
                    <p className='mt-3 textoparrafo'>
                        - Elaboración y planeación de contenido en social media.<br></br>
                        - Copys creativos<br></br>
                        - Community Manager
                    </p>
                </Col>
            </Row>




            <Row className='mt-4'>
                <Col>
                    <h4 className='titulo'>Estrategia de marca</h4>


                    <p className='mt-3 textoparrafo'>
                        - Estrategia con influencers <br></br>
                        - Performance de marca<br></br>
                        - Sistema inteligente</p>

                </Col>
                <Col>
                    <h4 className='titulo'>Diseño digital</h4>
                    <br></br>
                    <p className='mt-3 textoparrafo'>
                        - Elaboración de brandbook<br></br>
                        - Imagen de marca
                    </p>
                </Col>
                <Col>
                    <h4 className='titulo'>Branding digital</h4>
                    <br></br>
                    <p className='mt-3 textoparrafo'>
                        - Comunicación de marca, es decir, cómo debe ser el lenguaje y lo visual de tu negocio para generar una relación de éxito con el cliente. <br></br>
                        - Identidad y experiencia
                    </p>
                </Col>
                <Col>
                    <h4 className='titulo'>Diseño de merchandise</h4>
                    <p className='mt-3 textoparrafo'>
                        - Elaboración de parches, pines y playeras.
                    </p>
                </Col>
            </Row>



            <Row className='mt-4'>
                <Col>
                    <h4 className='titulo'>Consultoría de software</h4>


                    <p className='mt-3 textoparrafo'>
                        - Diseño de solución en implementación <br></br>
                        - Optimización de operaciones y soluciones<br></br>
                        - Migración de soluciones</p>

                </Col>
                <Col>
                    <h4 className='titulo'>Tecnología móvil</h4>
                    <br></br>
                    <p className='mt-3 textoparrafo'>
                        - Aplicaciones móviles<br></br>
                        - Aplicaciones web
                    </p>
                </Col>
                <Col>
                    <h4 className='titulo'>Telecomunicaciones</h4>
                    <br></br>
                    <p className='mt-3 textoparrafo'>
                        - Cableado estructurado<br></br>
                        - Voz y Datos<br></br>
                        - Video vigilancia
                    </p>
                </Col>
                <Col>
                    <h4 className='titulo'>Diseño de software a la medida</h4>
                    <p className='mt-3 textoparrafo'>
                        - Desarrollo y mantenimiento de cualquier tecnología necesaria en tu empresa
                    </p>
                </Col>
            </Row>
        </Container>
    </div>;
}
