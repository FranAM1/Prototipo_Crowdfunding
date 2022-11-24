const header = document.getElementById("header");

fetch("./components/header.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML += data;
  });

function abrirNav(){
    document.getElementsByTagName("nav")[0].className = "mostrarNav";
    document.getElementById("navFondo").className = "overlayNav"
}

function cerrarNav(){
    document.getElementsByTagName("nav")[0].className = "ocultar";
    document.getElementById("navFondo").className = "ocultar"
}

function mostrarBuscador(){
  if(window.innerWidth <= 875){
    document.getElementById("menuBuscadorMobile").className = "buscadorMobile"
  }
}

function ocultarBuscador(){
  document.getElementById("menuBuscadorMobile").className = "ocultar"
}

window.addEventListener("resize", ()=>{
  if(window.innerWidth > 875 && document.getElementsByTagName("nav")[0].className == "ocultar"){   
    document.getElementsByTagName("nav")[0].className = "";
  }
  
  if(window.innerWidth > 875 && document.getElementById("menuBuscadorMobile").className == "buscadorMobile"){
    ocultarBuscador()
  }
})