let destacadosCards = document.getElementById("destacadosCards")
const numeroDeCards = 4

fetch("./components/card.html")
    .then(res=>res.text())
    .then(data => {
        for (let i = 0; i < numeroDeCards; i++) {
            destacadosCards.innerHTML += data
        }
    })