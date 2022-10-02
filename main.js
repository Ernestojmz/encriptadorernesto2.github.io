function validarTexto (texto) {
    
    var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    var mayusculas = /[A-Z]/g;
    var numeros = /[0-9]/g;  
    var vacio="";  
      
    if(texto.match(mayusculas)||texto.match(caracteres)||texto.match(numeros)){
        alert("No se permiten caracteres especiales, mayusculas ni numeros");
        return true; 
    }else if(texto==vacio){
       alert("Ingrese un mensaje para encriptar");
        return true;
   }else {
        return false;
    }
}


var btnEncriptar = document.getElementById("btnEncriptar");

btnEncriptar.addEventListener("click",function ()  {
    var textoIn = document.getElementById("textoEntrada").value;
    var textoIngresado = textoIn;
   
    if (validarTexto (textoIngresado) == false) {       
        var Encriptado = encriptar(textoIngresado);
        var resultado = document.getElementById("textoSalida");
        resultado.value = Encriptado;
    } else {        
        textoIn = "";     
     
    }
               
})


const condiciones = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

function encriptar (textoIngresado) {
    var Encriptado = "";
    for (const obj in condiciones) {
        Encriptado = textoIngresado.replaceAll(obj,condiciones[obj]);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}

var btnDesencriptar = document.getElementById("btnDesencriptar");

btnDesencriptar.addEventListener("click", function(){
    var textoIngresado = document.getElementById("textoEntrada").value;
    var Desencriptado = desencriptar(textoIngresado);

    var resultado = document.getElementById("textoSalida");
    resultado.value = Desencriptado;
})



function desencriptar (textoIngresado) {
    var Encriptado = "";
    for (const obj in condiciones) {
        Encriptado = textoIngresado.replaceAll(condiciones[obj],obj);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}