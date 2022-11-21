const header = document.getElementById("header");

fetch("./components/header.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML += data;
  });

window.onload = () =>{
    if (window.innerWidth < 876) {
        document.getElementById("iconoUsuario").className = "fas fa-user fa-2x";
    }else{
        document.getElementById("iconoUsuario").className = "fas fa-user fa-5x";
    }
}

window.addEventListener("resize", () => {
    if (window.innerWidth < 876) {
        document.getElementById("iconoUsuario").className = "fas fa-user fa-2x";
    }else{
        document.getElementById("iconoUsuario").className = "fas fa-user fa-5x";
    }
})

function abrirNav(){
    document.getElementsByTagName("nav")[0].className = "mostrarNav";
}

function cerrarNav(){
    document.getElementsByTagName("nav")[0].className = "ocultarNav";
}