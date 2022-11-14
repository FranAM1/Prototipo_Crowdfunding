let boton = document.getElementById("backToTop");

window.onscroll = function() {
    detectarScroll()
};

function detectarScroll() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    boton.style.display = "block";
  } else {
    boton.style.display = "none";
  }
}

function volverArriba() {
  document.documentElement.scrollTop = 0;
} 