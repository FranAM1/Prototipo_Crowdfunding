function numeroSlide(valor, id){
    let numero = parseInt(valor)
    document.getElementById(id).innerHTML = numero.toLocaleString();
}


function abrirFiltros(){
    document.getElementById("overlayFiltros").className = "overlayFiltros";
    document.getElementById("filtrosID"). className = "seccionFiltrosMobile"
    document.getElementById("iconoCerrarFiltros").className = "fa-solid fa-x fa-2x iconoCerrarFiltros"
}

function ocultarFiltros(){
    document.getElementById("iconoCerrarFiltros").className = "ocultar"
    document.getElementById("overlayFiltros").className = "ocultar";
    document.getElementById("filtrosID").className = "ocultar"
}

window.addEventListener("resize", ()=>{
    if(window.innerWidth > 875){   
      document.getElementById("filtrosID").className = "seccionFiltros"
      document.getElementById("overlayFiltros").classList = "ocultar";
      document.getElementById("iconoCerrarFiltros").className = "ocultar"
    }
  })