import React from 'react';
import Styles from './Primeroanios.module.css'; // Importa el archivo CSS donde definirás el estilo
import Footer from '../footer/footer';
const Primeroanios = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.contenido}>
        <h1>Primeros Años</h1>
        <img src='./iconos/juliomelgarbio.jpeg' alt="Julio Melgar" />
        <p>
          Julio Melgar, nació el 16 de Octubre de 1972 en el departamento de Escuintla, Guatemala, tuvo la oportunidad de conocer al Señor Jesús a la corta edad de 10 años, desde ese tiempo comenzó a servir al Señor con su vida y con mucha pasión.
        </p>
        <p>
          En 1994, Julio Melgar junto con varios amigos fundaron un nuevo ministerio, el cual está formado por músicos y cantantes que sirven dentro de sus respectivas iglesias y juntos sirven a la Iglesia de Cristo.
        </p>
        <p>
          Con un deseo de inspirar a la gente de todas las razas, generaciones y culturas, restaurando a través de la adoración la comunión íntima con Dios, Julio y su banda comenzaron a mezclar sonidos y géneros para crear música que rompe barreras y esquemas y desafía todo tipo de clasificación.
        </p>
        <p>
        Junto con su equipo de músicos y cantantes, Julio utiliza la diversidad de gustos musicales, como punto de referencia para crear cada una de sus canciones. 
        </p>
        <p>
        Lo que Julio hace no tiene que ver nada mas con géneros musicales o ritmos sino con «un sonido nuevo que viene del corazon de Dios, que transforma, sana, desafia y marca las vidas».
        </p>
        <p>
        Constantemente, Julio y su equipo de musicos viaja extensivamente en su pais Guatemala como tambien en otras naciones y a la vez sirviendo en su iglesia local en la cual es pastor. 
        </p>
        <p>
        Julio cuenta con una grabacion llamada «Dia de Pentecostes» y ahora presenta su nuevo proyecto llamado «Creo en Ti» el cual es el resultado de creer en cada palabra que salio de la boca de Dios, podemos ver el reflejo de la promesa de Dios cumpliendose de una manera excepcional y asombrosa, «Creo en Ti» es un disco que tiene 13 canciones en su mayoria escritas por Julio, las cuales son una mezcla de diferentes estilos como el gospel, funk, rock alternativo, disco, reggae, punk, R&B, pero lo interesante es que es un proyecto lleno de la presencia de Dios que marcara un Nuevo tiempo en la vida de las personas que lo escuchen.
        </p>
        
      </div>
      <Footer className={Styles.footer} />
    </div>
  );
};

export default Primeroanios;

