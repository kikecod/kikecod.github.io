import React from 'react';
import Styles from './UnidosconJulio.module.css';
import Footer from '../footer/footer';

const UnidosconJulio = () => {
  return (
    <div className={Styles.container}>
      <div>
        <h1 className={Styles.title}>Unidos con Julio Melgar</h1>
        <img src='./iconos/juliomelgaroracion.jpg.webp' alt="Julio Melgar Oración" className={Styles.image} />
      </div>
      <div>
        <p className={Styles.description}>
          Julio Melgar hizo su presentación final en concierto en marzo de 2019 para Unidos con Julio Melgar, con la participación de Miel San Marcos, Redimi2, Marco Barrientos, Juan Carlos Alvarado, Bani Muñoz, Daniel Calveti, Danilo Montero, Kike Pavón, Fernel Monroy, Juan De Montreal y su hijo Lowsan Melgar. En ese concierto interpretaría «Tus cuerdas de amor» junto a su hijo Lowsan por primera vez.
        </p>
      </div>
      <div className={Styles.video}>
        <video width="560" height="315" controls>
          <source src='./iconos/videojulio.mp4' type="video/mp4" />
          {/* Puedes agregar más formatos de video si tienes, como WebM o Ogg */}
          Tu navegador no admite el elemento de video.
        </video>
      </div>
      <Footer />
    </div>
  );
};

export default UnidosconJulio;

