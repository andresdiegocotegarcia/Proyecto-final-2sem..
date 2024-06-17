
function agregarAlCarrito(nombre, precio) {
   
    const tallaSeleccionada = obtenerTallaSeleccionada();

    
    if (!tallaSeleccionada) {
        alert('Por favor, selecciona una talla antes de agregar al carrito.');
        return;
    }

   
    const item = {
        nombre: nombre,
        precio: precio,
        talla: tallaSeleccionada
    };

    
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    
    carrito.push(item);

    
    localStorage.setItem('carrito', JSON.stringify(carrito));

    
    actualizarCarrito();
}


function obtenerTallaSeleccionada() {
    const selectTalla = document.querySelector('.talla-select');
    return selectTalla.value; 
}


function actualizarCarrito() {
   
}


function enviarCarritoWhatsApp() {
    const numeroTelefono = '+573026013946'; 
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito.length === 0) {
        alert('El carrito está vacío. Agrega productos antes de proceder.');
        return;
    }

    let mensaje = 'Hola, estoy interesado en los siguientes artículos:\n\n';
    let total = 0;

    carrito.forEach((articulo, index) => {
        mensaje += `${index + 1}. ${articulo.nombre} - Talla: ${articulo.talla} - Precio: $${articulo.precio.toLocaleString()}\n`;
        total += articulo.precio;
    });

    mensaje += `\nTotal: $${total.toLocaleString()}`;

    let url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
