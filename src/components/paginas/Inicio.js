import React from 'react';
import Carousel1 from '../carousel/Carousel1';
import Styles from './Inicio.module.css'; // Importa el archivo CSS donde definiremos el estilo
import Footer from '../footer/footer';
const Inicio = () => {
  return (
    <div>
      <Carousel1 />
      <div className={Styles['inicio-container']}>
        <div className={Styles['caja-texto']}>
          <h1>Julio Melgar</h1>
          <p>
            Julio Melgar fue un reconocido cantante y líder de alabanza cristiano. Durante su carrera, logró impactar a miles de personas con su música y su fe. Aquí puedes encontrar información sobre algunos de sus mayores éxitos y su legado en la música cristiana.
          </p>
        </div>
      </div>
      <div className={Styles['escucha']}>
        <h3>JULIO MELGAR MARCA HUELLA EN LA HISTORIA CON LA CANCIÓN TUS CUERDAS DE AMOR <br/></h3>
        <div className={Styles['click-escucha']}>
          <a href="https://open.spotify.com/track/0VIGzWqBRAUjvInjCphvhO?si=fwQ7hz27TIqfu7NNYZobAQ" target="_blank" rel="noopener noreferrer">
            TUS CUERDAS DE AMOR - ESCÚCHALA AQUÍ
          </a>
        </div>
        <h5>YA DISPONIBLE EN TODAS LAS PLATAFORMAS</h5>
        <iframe width="790" height="421" src="https://www.youtube.com/embed/yDdyDDAWRcM?si=PTG7l5_1jts42tmK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <Footer/>
    </div>
  )
}

export default Inicio;

