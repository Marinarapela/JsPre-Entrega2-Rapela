// Listado de productos
let productos = [ { id: 1, nombre: "Echeverria", precio: 4000 },
                { id: 2, nombre: "Aloe vera", precio: 4500 },
                { id: 3, nombre: "Menta", precio: 2300 },
                { id: 4, nombre: "Romero", precio: 2500 },
                { id: 5, nombre: "Jazmin", precio: 5000 },];

// Mostrar productos
let contenedorProductos = document.getElementById("lista-productos");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function listarProductos (arrayProducts){ 
    arrayProducts.forEach((producto) => { 
        const card = document.createElement("div"); 
        card.innerHTML = `<h2>${producto.nombre}</h2> 
                        <p>${producto.precio}</p>
                        <button class="agregarProducto" id="${producto.id}">Agregar al carrito</button>`; 
        contenedorProductos.appendChild(card) 
    });
    agregarAlCarrito()
    }

listarProductos(productos)

// Agregar al carrito 
function agregarAlCarrito() {
    addButton = document.querySelectorAll(".agregarProducto");
    addButton.forEach((button) => {
    button.onclick = (e) => {
        const productoId = e.currentTarget.id;
        const productoSeleccionado = productos.find(
        (producto) => producto.id == productoId
        );
        const productoExistente = carrito.find(
        (item) => item.id === productoSeleccionado.id
        );
        if (productoExistente) {
        productoExistente.cantidad += 1;
        } else {
        productoSeleccionado.cantidad = 1;
        carrito.push(productoSeleccionado);
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
    };
    });
}

// Vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    localStorage.removeItem("carrito");
    mostrarCarritoVacio(); 
}

let botonVaciarCarrito = document.getElementById("vaciar-carrito");
botonVaciarCarrito.addEventListener("click", vaciarCarrito);


// Calcular total del carrito

let calculoTotal = document.getElementById("total-compra");

function mostrarTotal() {
    let total = 0;
    for (let producto of carrito) {
        total += producto.precio;
    }
    const sumaTotal = document.createElement("div");
    sumaTotal.innerHTML = `<h3>Total de la compra: $${total}</h3>`;
    calculoTotal.appendChild(sumaTotal); 
}




//VOY A DEJAR TODO ESTO COMENTADO HASTA QUE LO PASE A DOM Y EVENTOS
// Finalizar la compra
//function procesarCompra() {
   // if (carrito.length === 0){ 
   //     console.log("Ups! Tu carrito está vacío. No se puede procesar la compra."); 
   //     return; 
  //  }
  //  }

//console.log("Tu carrito:"); 

//for (let producto of carrito) { 
//    console.log(producto.nombre + " - " + producto.precio); 
//}

//const total = calcularTotal(); 


// console.log("Monto total de tu compra: " + total);

//let confirmacion = prompt("¿Deseas confirmar tu compra?: \n Presiona 1 para confirmar \n Presiona 2 para cancelar"); 

//if (confirmacion === "1") { 
//    console.log("Tu compra ha sido confirmada. ¡Muchas gracias por tu compra!"); 
    
//    carrito = []; // Vaciar el carrito después de la compra 
//} else { 
//console.log("Tu compra ha sido cancelada."); 
//}

// Interacción con el carrito
//function interactuarConCarrito() {

//mostrarProductos();



