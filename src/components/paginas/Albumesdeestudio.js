import React from 'react';
import Footer from '../footer/footer';
const Albumesdeestudio = () => {
  return (
    <div>
      <h1>Álbumes de Estudio</h1>
      <div className="d-flex flex-wrap justify-content-between">
        <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
        <img src="./iconos/setrata.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Se trata de ti</h5>
          <p className="card-text">
          Fue lanzado en el año 2015 y se convirtió en uno de los trabajos más destacados de su carrera. Este álbum contiene un repertorio de canciones que abordan temas de adoración, alabanza y espiritualidad, con letras profundas que reflejan la fe cristiana y la relación personal con Dios.
          </p>
          <a href="https://youtu.be/iPBfT_bBt6A?si=O1QJ4Px99ZNsACcn" className="btn btn-primary">
            Escuchala aqui
          </a>
        </div>
        </div>
        <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
        <div className="card" style={{ width: '18rem' }}>
        <img src="./iconos/vuelve.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Vuelve</h5>
          <p className="card-text">
          En este álbum, Julio Melgar presenta una variedad de canciones que invitan a reflexionar sobre la fe, el amor de Dios y la importancia de buscar un acercamiento espiritual con el Creador. La música de "Vuelve" busca conectar con los oyentes a nivel emocional y espiritual, llevando mensajes de esperanza y restauración.
          </p>
          <a href="https://youtu.be/ArZBYCbRkgc?si=4t7UxaR-Emn3iF1D" className="btn btn-primary">
            Escuchala Aqui
          </a>
        </div>
      </div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-between">
        <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
        <div className="card" style={{ width: '18rem' }}>
        <img src="./iconos/creo.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Creo en ti</h5>
          <p className="card-text">
          Este álbum se destaca por ofrecer un repertorio de canciones poderosas y emotivas que exploran temas de fe, esperanza, adoración y la relación personal con Dios. Las letras de las canciones reflejan una profunda conexión espiritual y expresan la confianza en Dios a pesar de las circunstancias difíciles.
          </p>
          <a href="https://youtu.be/xJ_ZZkM5fGY?si=muKWFFULzI253ZFv" className="btn btn-primary">
            Escuchala Aqui
          </a>
        </div>
      </div>
        </div>
        <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
        <div className="card" style={{ width: '18rem' }}>
        <img src="./iconos/dia.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Dia de Pentecostes</h5>
          <p className="card-text">
          Julio Melgar fue un reconocido líder de alabanza y adoración, así como un cantante y compositor de música cristiana contemporánea. Nació en Guatemala en 1972 y su carrera musical estuvo marcada por su profundo compromiso con la fe cristiana y su pasión por llevar un mensaje de esperanza y amor a través de la música.
          </p>
          <a href="https://youtu.be/pE24O18y1jE?si=FCLC-MrvthwUOvC9" className="btn btn-primary">
            Escuchala aqui
          </a>
        </div>
      </div>
        </div>
      </div>
     <Footer/>   
    </div>
  );
};

export default Albumesdeestudio;




















