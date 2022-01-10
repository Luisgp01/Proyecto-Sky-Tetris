let correJuego = function() {

    document.getElementById("newGame").style.display = "none";

    document.getElementById("theHead").style.display = "none";

    document.getElementById("credits").style.display = "none";

    document.getElementById("main").style.display = "block";

    document.getElementById("creditBtn").style.display = "none";

}

let muestraCreditos = function() {
    document.getElementById("theHead").style.display = "none";

    document.getElementById("creditBtn").style.display = "none";

    document.getElementById("newGame").style.display = "none";

    document.getElementById("credits").style.display = "block";

    document.getElementById("backBtn").style.display = "block";
}

let irAtras = function() {

    document.getElementById("backBtn").style.display = "none";

    document.getElementById("credits").style.display = "none";

    document.getElementById("theHead").style.display = "block";

    document.getElementById("newGame").style.display = "block";

    document.getElementById("creditBtn").style.display = "block";
}