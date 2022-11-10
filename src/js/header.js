const header = document.getElementById("header")

fetch("./components/header.html")
    .then(res=>res.text())
    .then(data => {
        header.innerHTML = data
    })