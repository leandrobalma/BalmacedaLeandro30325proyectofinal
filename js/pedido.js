const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const procesarPedidoBtn = document.getElementById('procesar-pedido');

cargarEventos();

function cargarEventos(){

    //Se ejecuta cuando se presiona agregar al carrito
    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});

    // Se ejecuta cuando se elimina productos del carrito
    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});

    //Se ejecuta al vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});

    //muestra lo que se almacena en el local storage
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    //procesa el pedido
    procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}