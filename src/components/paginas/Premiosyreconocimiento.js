import React from 'react'
import Footer from '../footer/footer'

const Premiosyreconocimiento = () => {
  return (
    <div>
        <h1>Premios y reconocimiento</h1>
        <img src='./iconos/premio.jpeg' width={1300}/>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Primer premio
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Premios Arpa: nominado en las categorías "Mejor álbum vocal masculino" y "Mejor álbum de cantautor" por Creo en ti</strong><code>2009</code>, 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Segundo Premio
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Premios GMA Dove como "Canción del Año en Lenguaje Español" por «Tus cuerdas de amor» junto a Lowsan Melgar</strong><code>2020</code>
      </div>
    </div>
  </div>
  
  </div>
    <Footer/>
</div>
    
  )
}

export default Premiosyreconocimiento