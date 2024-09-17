const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const form = document.getElementById("pizza-form");
const container = document.getElementById("pizza-container");

document.addEventListener("DOMContentLoaded", function (event) {
  const pizzaGuardada = localStorage.getItem("ultimaPizzaRenderizada");
  if (pizzaGuardada) {
    const pizzaId = JSON.parse(pizzaGuardada).id;
    renderPizza(pizzaId);
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const pizzaId = parseInt(document.getElementById("pizza-id").value);
  renderPizza(pizzaId);
});

function renderPizza(id) {
  container.style.display = "block";
  container.innerHTML = "";
  const pizza = pizzas.find((p) => p.id === id);

  if (pizza) {
    const card = document.createElement("div");
    card.className = "card";

    const infoPizza = document.createElement("div");
    infoPizza.className = "info";

    card.innerHTML = `
    <h2>${pizza.nombre.toUpperCase()}</h2>
      <img src="${pizza.imagen}" alt="${pizza.nombre}" />
    `;

    infoPizza.innerHTML = `
      <p>Precio: $${pizza.precio}</p>
      <p>Ingredientes: ${pizza.ingredientes.join(", ") + "."}</p>`;

    localStorage.setItem("ultimaPizzaRenderizada", JSON.stringify(pizza));

    card.appendChild(infoPizza);
    container.appendChild(card);
  } else {
    container.innerHTML = "<p>Pizza no encontrada.</p>";
    container.style.display = "block";
  }
}
