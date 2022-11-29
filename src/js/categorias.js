function numeroSlide(valor, id){
    let numero = parseInt(valor)
    document.getElementById(id).innerHTML = numero.toLocaleString();
}
