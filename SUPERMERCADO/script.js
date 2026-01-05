function aplicarPromo(elementoId, nuevoPrecio) {
    document.getElementById(elementoId).textContent = nuevoPrecio.toFixed(2) + '€';
    alert('Promo aplicada!! Nuevo precio: ' + nuevoPrecio.toFixed(2) + '€');
}

function mostrarDescripcion() {
    const descripcion = document.getElementById('descripcion');
    if (descripcion.style.display === 'none') {
        descripcion.style.display = 'block';
    } else {
        descripcion.style.display = 'none';
    }
}