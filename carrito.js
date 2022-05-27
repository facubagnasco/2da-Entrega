let carrito = [];

if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
} else {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

let divCarrito = document.querySelector("#divCarrito");

carrito.forEach((producto, indice) => {
  divCarrito.innerHTML += `<div class="card text-white bg-primary mb-3 m-3 " id="productos${indice}"  style="max-width: 20rem;"> 
        <div class="card-header fw-bold ">${producto.nombre}</div>
          <div class="card-body">
          <p class="card-text">${producto.marca}</p>
          <p class="card-text">$${producto.precio}</p>
          <p class="card-text"> Stock: ${producto.stock}</p>
          <button id="boton${indice}" class="btn btn-danger" onclick="borrarItem(${indice});"> Borrar item del Carrito</button>
        </div>  
    </div>
    `;
});

function borrarItem(indice) {
  console.log(indice);
  localStorage.removeItem("carrito");
  carrito.splice(indice, 1);
  console.log(carrito);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  location.reload();
}
