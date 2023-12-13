import React from 'react';
import Styles from './Fallecimiento.module.css';
import Footer from '../footer/footer';

const Fallecimiento = () => {
  return (
    <div className={Styles.container}>
      <div>
        <h1 className={Styles.title}>Fallecimiento</h1>
        <img src='./iconos/falle.png' alt="Fallecimiento" className={Styles.image} />
      </div>
      <div>
        <p className={Styles.description}>
          En marzo de 2019, el artista realizó un Live de Instagram donde explicaba su estado de salud. Falleció el 19 de abril de 2019 a las 2:00 p. m. a los 46 años de edad a causa de un cáncer de páncreas del cual padecía. Su hijo Lowsan lanzaría oficialmente la canción «Tus cuerdas de amor» en mayo, y posteriormente recibiría una nominación y reconocimiento póstumo para él y su padre, a cinco meses del fallecimiento del artista al ser escogida como Canción en español del año en Premios GMA Dove 2019.
        </p>
        <p className={Styles.description}>
          En el álbum Legado de su hijo Lowsan, aparece una última canción del intérprete que no había sido lanzada, titulada «Me basta tu Palabra» contenía la voz del artista fallecido, junto a Lowsan y Miel San Marcos.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Fallecimiento;
