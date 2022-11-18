const footer = document.getElementById("footer")

fetch("./components/footer.html")
    .then(res=>res.text())
    .then(data => {
        footer.innerHTML += data
    })