import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import Primeroanios from './components/paginas/Primeroanios';
import CarreraMusical from './components/paginas/CarreraMusical';
import UnidosconJulio from './components/paginas/UnidosconJulio';
import Fallecimiento from './components/paginas/Fallecimiento';
import Albumesdeestudio from './components/paginas/Albumesdeestudio';
import Colaboraciones from './components/paginas/Colaboraciones';
import VideosColaborativos from './components/paginas/VideosColaborativos';
import VideosMusicales from './components/paginas/VideosMusicales';
import Premiosyreconocimiento from './components/paginas/Premiosyreconocimiento';
import Creditos from './components/paginas/Creditos';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/primerosanios' element={<Primeroanios />} />
          <Route path='/carreramusical' element={<CarreraMusical />} />
          <Route path='/unidosconjulio' element={<UnidosconJulio />} />
          <Route path='/fallecimiento' element={<Fallecimiento />} />
          <Route path='/albumesdeestudio' element={<Albumesdeestudio />} />
          <Route path='/colaboraciones' element={<Colaboraciones />} />
          <Route path='/videosmusicales' element={<VideosMusicales />} />
          <Route path='/videoscolaborativos' element={<VideosColaborativos />} />
          <Route path='/premiosyreconocimiento' element={<Premiosyreconocimiento />} />
          <Route path='/creditos' element={<Creditos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
