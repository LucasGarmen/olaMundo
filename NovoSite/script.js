function mudaFoto(foto){
    document.getElementById("icone").src = foto; 
    
}
function mostrarLista(tipo) {
    // Obtén todas las listas
    var listas = document.getElementsByClassName("lista");
    
    // Oculta todas las listas
    for (var i = 0; i < listas.length; i++) {
        listas[i].style.display = "none";
    }

    // Muestra la lista específica
    var lista = document.getElementById(tipo);
    lista.style.display = "block";
}
function AgregaFoto(moto, texto){
    var modelo = document.getElementById("modelo");
    modelo.src = moto; 
    modelo.style.display = "block";
    modelo.onmouseover = function() {
        agrandarImagen();
        mostrarTexto(texto);
    };
    modelo.onmouseout = function() {
        restaurarImagen();
        ocultarTexto();
    };
}

function agrandarImagen() {
    var modelo = document.getElementById("modelo");
    modelo.style.width = "350px"; // Cambiar el ancho como desees
    modelo.style.height = "300px"; // Cambiar el alto como desees
}
function restaurarImagen() {
    var modelo = document.getElementById("modelo");
    modelo.style.width = ""; // Restaurar el ancho original
    modelo.style.height = ""; // Restaurar el alto original
}
function mostrarTexto(texto) {
    var textoElement = document.getElementById("texto");
    textoElement.textContent = texto;
    textoElement.style.display = "block";
}

function ocultarTexto() {
    var textoElement = document.getElementById("texto");
    textoElement.style.display = "none";
}
/*
 function AgregaFoto(url) {
            // Cambiar la imagen grande
            document.getElementById("modelo").src = url;
            // Mostrar la imagen grande
            document.getElementById("modelo").style.display = "block";
            // Mostrar el texto debajo de la imagen
            document.getElementById("texto").style.display = "block";
            // Agrandar la imagen al pasar el mouse por encima
            document.getElementById("modelo").onmouseover = function() {
                agrandarImagen();
            };
            */