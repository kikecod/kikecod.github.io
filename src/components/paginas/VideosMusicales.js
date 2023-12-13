import React from 'react'
import Footer from '../footer/footer'

const VideosMusicales = () => {
  return (
    <div>
        <h1>Videos Musicales</h1>
        <img src='./iconos/videomus.jpeg' width={1300}/>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Año</th>
      <th scope="col">Titulo</th>
      <th scope="col">Album</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2011</th>
      <td>«Cristo»</td>
      <td>Vuelve</td>
      
    </tr>
    <tr>
      <th scope="row">2011</th>
      <td>«Vuelve»</td>
      <td>Vuelve</td>
      
    </tr>
    <tr>
      <th scope="row">2015</th>
      <td>«Estas Aquí»</td>
      <td>Se trata de ti</td>
      
    </tr>
    <tr>
      <th scope="row">2015</th>
      <td>«Eres (feat. Lowsan Melgar)»</td>
      <td>Se trata de ti</td>
     
    </tr>
    
  </tbody>
</table>
    <Footer/>
    </div>
  )
}

export default VideosMusicales