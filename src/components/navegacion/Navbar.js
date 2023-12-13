import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to='/' >
                    <img src='./logo.png' width='120'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to='/' >Inicio</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Biografia
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/primerosanios'>Primeros Años</Link></li>
                                <li><Link className="dropdown-item" to='/carreramusical'>Carrera Musical</Link></li>
                                <li><Link className="dropdown-item" to='/unidosconjulio'>Unidos con Julio Melgar</Link></li>
                                <li><Link className="dropdown-item" to='/fallecimiento'>Fallecimiento</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Obras Musicales
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/albumesdeestudio'>Albumes de Estudio</Link></li>
                                <li><Link className="dropdown-item" to='/colaboraciones'>Colaboracones</Link></li>
                                <li><Link className="dropdown-item" to='/videosmusicales'>Videos Musiclaes</Link></li>
                                <li><Link className="dropdown-item" to='/videoscolaborativos'>Videos Colaborativos</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/premiosyreconocimiento'>Premios y Reconocimiento</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/creditos'>Creditos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar