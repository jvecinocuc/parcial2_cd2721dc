import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';

const VideojuegosClasicos: React.FC = () => {
  const juegos = [
    'Super Mario Bros (NES)',
    'The Legend of Zelda (NES)',
    'Street Fighter II (SNES)',
    'Sonic the Hedgehog (Sega Genesis)',
    'Mega Man X (SNES)',
    'Final Fantasy VI (SNES)'
  ];

  return (
    <Container>
      <h2 className="mt-5">Videojuegos Clásicos</h2>
      <ListGroup variant="flush">
        {juegos.map((juego, index) => (
          <ListGroup.Item key={index}>{juego}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default VideojuegosClasicos;
