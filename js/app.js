// VARIABLES
const ingredientes = document.querySelectorAll(".ingrediente");
console.log(ingredientes);
const listaPizza = document.getElementById("listaPizzaIngredientes");

const btnPedir = document.getElementById("btnPedir");

// FUNCIONES

//función agregar ingrediente
const agregarIngrediente = (ev) => {
  // console.log(ev);
  const ingrediente = ev.target.innerText;
  console.log(ingrediente);

  //Creo div contenedor de cada ingrediente
  let listaDiv = document.createElement("div");
  listaDiv.classList.add("ingredienteDeLista");
  listaDiv.textContent = ingrediente;

  //Botón eliminar ingrediente
  // <span class="material-symbols-outlined"> delete </span>`;
  let iconoBorrar = document.createElement("span");
  iconoBorrar.classList.add("material-symbols-outlined");
  iconoBorrar.innerText = "delete";
  iconoBorrar.style.cursor = "pointer";
  iconoBorrar.addEventListener("click", borrarIngrediente);

  //Añadir los nodos hijo
  listaDiv.appendChild(iconoBorrar);
  listaPizza.appendChild(listaDiv);
};

//función hacer pedido
const HacerPedido = () => {
  if (listaPizza.innerHTML === "") {
    alert("Tienes que elegir un ingrediente");
  } else {
    alert("PEDIDO REALIZADO. ¡GRACIAS!");
  }
};

//función Borrar Ingrediente
const borrarIngrediente = (ev) => {
  let ingrediente = ev.target.parentNode;
  console.log(ingrediente);
  ingrediente.remove();
};

//EVENTOS
for (let i = 0; i < ingredientes.length; i++) {
  ingredientes[i].addEventListener("click", agregarIngrediente);
}

btnPedir.addEventListener("click", HacerPedido);
