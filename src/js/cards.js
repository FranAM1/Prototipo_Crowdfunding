let arrayCards =[
    {
        titulo: "Mercedes Lackey's World of Valdemar",
        descripcion: "Go beyond the books with new official maps, timelines, apparel and more from the world of Valdemar!",
        dineroActual: 18120,
        dineroNecesitado: 49296,
        tiempoRestante: "5 dias",
        imagen: "https://ksr-ugc.imgix.net/assets/038/940/213/e01fd61b10e41dd5bc706e8e01032e95_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1666040804&gif-q=50&q=92&s=a0909ef2de1beb12844b689f7203e01f"
    },
    {
        titulo: "Queen of Hell: Initium",
        descripcion: "The epic origin of the Queen of Hell and her battle with Udoroth told in a three-part heavy metal album and comic book series!",
        dineroActual: 30532,
        dineroNecesitado: 38663,
        tiempoRestante: "1 semana",
        imagen: "https://ksr-ugc.imgix.net/assets/039/056/529/fb40eb752932b5497eb9f0a6a92ab6fb_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1666934101&gif-q=50&q=92&s=0077f06313a9f478b951009b29be237b"
    },
    {
        titulo: "Slay the Spire: The Board Game",
        descripcion: "A cooperative deckbuilding adventure!",
        dineroActual: 3224150,
        dineroNecesitado: 48329,
        tiempoRestante: "48 horas",
        imagen: "https://ksr-ugc.imgix.net/assets/039/238/787/fb76c269f613452c0faf044d878b4507_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1668552710&auto=format&frame=1&q=92&s=1aeaec4871bdf242d7cbbcc02d047ef5"
    },
    {
        titulo: "The Call of Karakoram",
        descripcion: "James Price, a young alpinist, has found the perfect environment to express himself. The gigantic mountains of the Karakoram.",
        dineroActual: 20502,
        dineroNecesitado: 35200,
        tiempoRestante: "2 semanas",
        imagen: "https://img.ulule.com/display/0c01859a914b966352441edcfd054f2375e9c61a/thumbnail/640x360/presales/3/6/4/2/5/1/152463/james-leaving-the-karakoram-highway-with-30kg-of-kit-1.CxSin8nasg.jpg"
    },
]


let destacadosCards = document.getElementById("destacadosCards")
const numeroDeCards = arrayCards.length;

arrayCards.forEach((e) =>{
    let porcentajeCampaña = parseInt(e.dineroActual*100/e.dineroNecesitado)+"%";
    

    destacadosCards.innerHTML +=
    `
    <div class="card">
      <div class="imageContainerCard">
        <img src="${e.imagen}">
      </div>
      <div class="datosCard">
        <h3>${e.titulo}</h3>
        <p>${e.descripcion}</p>
        <div class="infoExtraCard">
          <div class="moneyInfo">
            <i class="fa fa-solid fa-sack-dollar fa-2x"></i><span>${e.dineroActual.toLocaleString()}€</span>
          </div>
          <div class="favoritosInfo">  
            <i class="fa-sharp fa-solid fa-heart fa-2x"></i>
          </div>
          <div class="barraDeProgesion"><div style='width:${porcentajeCampaña}'>${porcentajeCampaña}</div></div>
          <div class="timeInfo">
            <i class="fa-solid fa-clock fa-2x"></i><span>Acaba en ${e.tiempoRestante}</span>
          </div>
        </div>
      </div>
    </div>
  `
})
