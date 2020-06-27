// Se definen variables que targetean el boton y el body
const colorBtn = document.querySelector(".colorBtn");
const bodyBcg = document.querySelector("body");

// Se crea el array con los colores que van a rotar
const colors = [
  "yellow",
  "red",
  "green",
  "blue",
  "orange",
  "purple",
  "black",
  "aqua",
  "fuchsia",
  "grey",
  "lime",
  "maroon",
  "navy",
  "olive",
  "silver",
  "teal",
];

// Event listener para el boton con una callback function
colorBtn.addEventListener("click", changeColor);

// Funcion que genera un numero aleatorio y lo aplica al background-color del body
function changeColor() {
  let random = Math.floor(Math.random() * colors.length);
  bodyBcg.style.backgroundColor = colors[random];
}
