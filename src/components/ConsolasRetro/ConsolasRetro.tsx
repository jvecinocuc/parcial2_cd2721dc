import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const ConsolasRetro: React.FC = () => {
  const consolas = [
    {
      nombre: 'Nintendo Entertainment System (NES)',
      año: 1983,
      imagen: '/nes.jpg',
      descripcion: 'Una de las consolas más icónicas, con clásicos como Super Mario Bros y The Legend of Zelda.'
    },
    {
      nombre: 'Super Nintendo (SNES)',
      año: 1990,
      imagen: '/snes.jpg',
      descripcion: 'Redefinió el género de los videojuegos con títulos como Super Mario World y Donkey Kong Country.'
    },
    {
      nombre: 'Sega Genesis',
      año: 1988,
      imagen: '/genesis.jpg',
      descripcion: 'Compitió ferozmente con Nintendo y presentó a Sonic the Hedgehog.'
    }
  ];

  return (
    <Container>
      <h2 className="mt-5">Consolas Retro</h2>
      <Row>
        {consolas.map((consola, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={consola.imagen} alt={consola.nombre} />
              <Card.Body>
                <Card.Title>{consola.nombre}</Card.Title>
                <Card.Text>
                  {consola.descripcion} <br />
                  <strong>Año de lanzamiento: {consola.año}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ConsolasRetro;
