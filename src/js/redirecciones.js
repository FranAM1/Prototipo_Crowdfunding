async function mostrarIndividual(posicionArray){
    await sessionStorage.setItem("posicion", posicionArray)

    window.location.href = "/crowdfunding.html"

}