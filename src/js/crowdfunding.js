import { arrayCards } from './cards.js';
let posicionCartaIndividual = sessionStorage.getItem("posicion")

let cartaEjemplo = arrayCards[posicionCartaIndividual];

let tituloCrowdfundingIndividual = document.getElementById("tituloCrowdfundingIndividual")
let imagenIndividual = document.getElementById("imagenFundingIndividual")
let categoriaIndividual = document.getElementById("categoriaIndividual")
let paisIndividual = document.getElementById("paisIndividual")
let contribuidoresIndividual = document.getElementById("contribuidoresIndividual")
let dineroIndividual = document.getElementById("dineroIndividual")
let porcentajeIndividual = document.getElementById("porcentajeIndividual")
let tiempoIndividual = document.getElementById("tiempoIndividual")

tituloCrowdfundingIndividual.innerHTML = " "+cartaEjemplo.titulo

imagenIndividual.src = " "+cartaEjemplo.imagen

categoriaIndividual.innerHTML = " "+cartaEjemplo.categoria

paisIndividual.innerHTML = " "+cartaEjemplo.pais

tiempoIndividual.innerHTML = " "+cartaEjemplo.tiempoRestante

contribuidoresIndividual.innerHTML = " "+cartaEjemplo.contribuidores.toLocaleString()

dineroIndividual.innerHTML = " "+cartaEjemplo.dineroActual.toLocaleString()+"€ de "+cartaEjemplo.dineroNecesitado.toLocaleString()+"€"

let calculoPorcentajeIndividual = parseInt(cartaEjemplo.dineroActual * 100 / cartaEjemplo.dineroNecesitado)
porcentajeIndividual.innerHTML = " "+ calculoPorcentajeIndividual + "%";
porcentajeIndividual.style.width = calculoPorcentajeIndividual+"%"
