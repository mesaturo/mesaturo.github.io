// Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){// si está oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificadas por su id
function crearBarra(id_barra){
    for(i=0; i<=16; i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

// Selecciono todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let msoffice = document.getElementById("msoffice");
crearBarra(msoffice);
let jira = document.getElementById("jira");
crearBarra(jira);
let postman = document.getElementById("postman");
crearBarra(postman);
let magiles = document.getElementById("magiles");
crearBarra(magiles);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barra
//para eso utilizo un arreglo, cada posición pertenece a un elemento
// comienzan en -1 porque no tiene ninguna pintada al iniciarse

let contadores = [-1, -1, -1, -1, -1, -1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

// función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 8, 0, intervalHtml);
        }, 100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 8, 1, intervalJavascript);
        }, 100);
        const intervalMsoffice = setInterval(function(){
            pintarBarra(msoffice, 17, 2, intervalMsoffice);
        }, 100);
        const intervalJira = setInterval(function(){
            pintarBarra(jira, 15, 3, intervalJira);
        }, 100);
        const intervalPostman = setInterval(function(){
            pintarBarra(postman, 10, 4, intervalPostman);
        }, 100);
        const intervalMagiles = setInterval(function(){
            pintarBarra(magiles, 15, 5, intervalMagiles);
        }, 100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}

