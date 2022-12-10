# Prototipo_Crowdfunding
Desenvolupa un prototipus amb HTML5, CSS3 i SCSS de la idea de projecte que has treballat en la P1


# Índice
- [Instalación del proyecto](#instalación-del-proyecto)
- [Guia de estilos](#guia-de-estilo)
  - [Paleta de colores](#paleta-de-colores)
  - [Fuentes](#fuentes)
  - [Webgrafia](#webgrafia)
- [CSS Transitions](#css-transitions)
- [Detalles del proyecto](#detalles-del-proyecto)
  - [Componentes](#componentes)
  - [Generador de cards](#generador-de-cards)
  - [Actualización individual](#actualización-individual)
- [Github project](#github-project)
- [Video explicativo](#video-explicativo)


# Instalación del proyecto
1. Clonar el proyecto con ```git clone https://github.com/FranAM1/Prototipo_Crowdfunding```. <br>
2. Dentro de la carpeta del proyecto hacer un ```npm install``` acompañado de un ```npm run scss``` para asegurar que el archivo css está totalmente actualizado respecto al scss. <br>
3. Abrir los htmls utilizando un servidor, ya que si los abres directamente del archivo no cargarán algunas partes.

# Guia de Estilo
### Paleta de colores
![image](https://user-images.githubusercontent.com/91600940/205704809-1fd096f3-b7b0-48d4-bba2-ed8624dff6b6.png)

### Fuentes
![image](https://user-images.githubusercontent.com/91600940/205703293-13a8886c-6574-491c-a393-052df0ec068a.png)

# CSS Transitions
Lo he utilizado para los hovers en distintos elementos de la página.

![Animation](https://user-images.githubusercontent.com/91600940/206865694-5a24eacd-13dc-400d-a50d-d670d90aa35d.gif)

# Detalles del proyecto

## Componentes
He creado una carpeta de componentes que contiene diferentes secciones que se repiten en las paginas de tal forma que las añado por js mediante un fetch. <br>
![image](https://user-images.githubusercontent.com/91600940/206869394-28599937-c698-474d-ae9d-ad7c764e951a.png)

**Ejemplo con el header:**
```
const header = document.getElementById("header");

fetch("./components/header.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML += data;
  });
```

## Generador de cards
He guardado todas las cards dentro del archivo ```cards.js``` en formato objeto para luego acceder mediante código a cada una e imprimir los datos que necesite. <br>
**Ejemplo de estructura de una card**
```
{
    titulo: "Mercedes Lackey's World of Valdemar",
    descripcion: "Go beyond the books with new official maps, timelines, apparel and more from the world of Valdemar!",
    dineroActual: 18120,
    dineroNecesitado: 49296,
    tiempoRestante: "5 dias",
    imagen: "https://cdn.discordapp.com/attachments/1043959075194544169/1043959251791527946/e01fd61b10e41dd5bc706e8e01032e95_original.jpg",
    pais: "Noruega",
    categoria: "Arte",
    contribuidores: 23021
  }
```
**Ejemplo de creación automática de cards**
```
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
```
## Actualización individual
La sección individual de cada crowdfunding es un solo archivo html que va cambiando con js en funcion de una variable guardada en el session storage. <br>
Al hacer click en una card se ejectua el siguiente código encargado de guardar que proyecto se quiere visualizar y la redirección a la página.
```
async function mostrarIndividual(posicionArray){
    await sessionStorage.setItem("posicion", posicionArray)

    window.location.href = "/crowdfunding.html"
}
```
Después se ejectua el código encargado de añadir a cada sección su información correspondiente mediante el código dentro del archivo ```crowdfunding.js```

### Webgrafia
[Kickstarter](https://www.kickstarter.com/?lang=es) <br>
[PcComponenetes](https://www.pccomponentes.com/) <br>
[Ulule](https://es.ulule.com/) <br>
[Fontawesome](https://fontawesome.com/) (iconos)

# Github project

[Link al github project](https://github.com/users/FranAM1/projects/2)

# Video explicativo
[Link del video en drive](https://drive.google.com/file/d/1DKlxEKpwVXcfPuuTAfy9YA4472GXTIEC/view?usp=sharing) (Si no usas la cuenta del instituto no dejará entrar)

