import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar.tsx/Navbar';
import Inicio from './components/Inicio.tsx/Inicio';
import ConsolasRetro from './components/ConsolasRetro/ConsolasRetro';
import VideojuegosClasicos from './components/VideojuegosClasicos/VideoJuegos_Clasicos';

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/consolas" element={<ConsolasRetro />} />
        <Route path="/juegos" element={<VideojuegosClasicos />} />
      </Routes>
    </Router>
  );
};

export default App;
