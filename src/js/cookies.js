const cookies = document.getElementById("cookiesContainer")

fetch("./components/cookies.html")
    .then(res=>res.text())
    .then(data => {
        cookies.innerHTML += data
    })

setTimeout(() => {
    cookies.className = "cookiesContainer"
    
}, 2000);

function ocultarCookies(){
    cookies.className = "ocultar"
}
