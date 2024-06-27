// Declaración de variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function verificarIntento(){
    console.log(intentos)
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); 
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos>1?'intentos':'intento'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // El usuario no acertó.
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor')
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos++;        
        limpiarCajaDeTexto();
    }
    return;
}

function limpiarCajaDeTexto(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se asignaron todos los números posibles');
    }else{
     // Si el número generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}   

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número entre el 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

function reiniciarJuego(){
    // Primero limpiamos la caja de texto
    limpiarCajaDeTexto();
    // Indicar mensaje de intervalo de números, generar número aleatorio y reiniciar el contador de intentos
    condicionesIniciales();   
    // Deshabilitar el botón de nuevo juego
}

condicionesIniciales();