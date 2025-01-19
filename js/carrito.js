let contenedorCarrito = document.getElementById("items-carrito")

let carritoStorage = JSON.parse(localStorage.getItem("carrito")) || [];

function listarCarrito(itemsCarrito) {
    itemsCarrito.forEach((producto) => {
    const cart = document.createElement("div");
    cart.innerHTML = 
        `<h2>${producto.nombre}</h2>
        <p>Precio: ${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <p>Total: ${producto.precio * producto.cantidad}</p>`;
        
    contenedorCarrito.appendChild(cart);
    });
}

listarCarrito(carritoStorage)



