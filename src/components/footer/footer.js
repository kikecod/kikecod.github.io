import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white py-4 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 d-flex align-items-center justify-content-center">
            {/* Coloca aquí tu imagen para el logo */}
            <Link>
                <img src='./logo.png' width='120'/>
            </Link>
          </div>
          <div className="col-12 col-md-9 text-center text-md-end">
            
            {/* Texto de derechos de autor */}
            <p className="mt-3 mb-0">© 2023 Tu Empresa. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
