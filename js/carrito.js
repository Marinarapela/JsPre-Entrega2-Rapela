let contenedorCarrito = document.getElementById("items-carrito")

let carritoStorage = localStorage.getItem("carrito")
carritoStorage = JSON.parse(carritoStorage)

function listarCarrito (itemsCarrito){ 
    itemsCarrito.forEach((producto) => { 
        const cart = document.createElement("div"); 
        cart.innerHTML = `<h2>${producto.nombre}</h2> 
                        <p>${producto.precio}</p>`

        contenedorCarrito.appendChild(cart) 
    })
}
listarCarrito(carritoStorage)

