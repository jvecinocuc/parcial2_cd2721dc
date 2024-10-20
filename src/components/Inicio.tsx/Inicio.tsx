import React from 'react';
import { Carousel } from 'react-bootstrap';

const Inicio: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="nes.jpg" alt="NES" />
        <Carousel.Caption>
          <h3>Nintendo Entertainment System (NES)</h3>
          <p>Lanzada en 1983, una de las consolas más icónicas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="snes.jpg" alt="SNES" />
        <Carousel.Caption>
          <h3>Super Nintendo (SNES)</h3>
          <p>Lanzada en 1990, redefinió el género de los videojuegos.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Inicio;
