const lista = document.querySelector('.lista-navegador');
const abrirMenu = document.querySelector('.abrir-menu');
const cerrarMenu = document.querySelector('.cerrar-menu');

function alternarBoton() {
    lista.classList.toggle("menu-abierto");
}

abrirMenu.addEventListener("click", alternarBoton);
cerrarMenu.addEventListener("click", alternarBoton);