class producto {
  constructor(nombre, marca, precio, stock) {
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.stock = stock;
  }
}

const producto1 = new producto("NeumaticoR15", "Yokohama", 90, 20);
const producto2 = new producto("NeumaticoR16", "Yokohama", 110, 16);
const producto3 = new producto("NeumaticoR17", "Yokohama", 150, 14);
const producto4 = new producto("NeumaticoR18", "Yokohama", 160, 12);
const producto5 = new producto("NeumaticoR19", "Yokohama", 180, 10);
const producto6 = new producto("NeumaticoR20", "Yokohama", 210, 4);

let productos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
];

let carrito = [];

if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
} else {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

let divProductos = document.querySelector("#divProductos");

productos.forEach((producto, indice) => {
  divProductos.innerHTML += `<div class="card text-white bg-primary mb-3 m-3 " id="productos${indice}"  style="max-width: 20rem;"> 
      <div class="card-header fw-bold ">${producto.nombre}</div>
        <div class="card-body">
        <p class="card-text">${producto.marca}</p>
        <p class="card-text">$${producto.precio}</p>
        <p class="card-text"> Stock: ${producto.stock}</p>
        <button id="boton${indice}" class="btn btn-secondary borrarproducto ">Agregar al Carrito</button>
      </div>  
  </div>
  `;
});

productos.forEach((producto, indice) => {
  document.querySelector(`#boton${indice}`).addEventListener("click", () => {
    console.log(document.querySelector(`#producto${indice}`));
    let productoCarrito = productos[indice];
    carrito.push(productoCarrito);
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  });
});
