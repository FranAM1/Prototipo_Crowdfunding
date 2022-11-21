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
    document.getElementsByTagName("nav")[0].className = "ocultarNav";
    document.getElementById("navFondo").className = "ocultarNav"
}