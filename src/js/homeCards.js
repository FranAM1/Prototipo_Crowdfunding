import { arrayCards } from './cards.js';

let destacadosCards = document.getElementById("seccionCards")

arrayCards.forEach((e, index) => {
  let porcentajeCampaña = parseInt(e.dineroActual * 100 / e.dineroNecesitado) + "%";


  destacadosCards.innerHTML +=
    `
    <div class="card" onclick="mostrarIndividual(${index})">
      <div class="imageContainerCard">
        <img src="${e.imagen}">
      </div>
      <div class="datosCard">
        <h3>${e.titulo}</h3>
        <p>${e.descripcion}</p>
        <div class="infoExtraCard">
          <div class="moneyInfo">
            <i class="fa fa-solid fa-sack-dollar fa-2x"></i><span>${e.dineroActual.toLocaleString()}€</span>
          </div>
          <div class="favoritosInfo">  
            <i class="fa-sharp fa-solid fa-heart fa-2x"></i>
          </div>
          <div class="barraDeProgesion"><div style='width:${porcentajeCampaña}'>${porcentajeCampaña}</div></div>
          <div class="timeInfo">
            <i class="fa-solid fa-clock fa-2x"></i><span>Acaba en ${e.tiempoRestante}</span>
          </div>
        </div>
      </div>
      </div>
    `
})