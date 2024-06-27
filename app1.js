// Variables
let min = parseInt(prompt('Digite el número minimo del rango: '));
let max = parseInt(prompt('Digite el número máximo del rango: '));
let numeroSecreto = Math.floor(Math.random()*(max - min))+ min;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 3;
console.log(numeroUsuario)

while(numeroUsuario != numeroSecreto){
    console.log(numeroSecreto);
    numeroUsuario = parseInt(prompt(`Dime un número entre ${min} y ${max} por favor:`));
    
    if(numeroUsuario >= min && numeroUsuario <= max){
        if(numeroUsuario == numeroSecreto){
            // Se cumplió la condición
            alert(`¡Felicidades acertaste! el número es: ${numeroUsuario}, lo hiciste en ${intentos} ${intentos == 1 ? 'intento': 'intentos'}`/*Aquí agregamos un operador ternario*/);
        }else{
            // La condición no se cumplió
            // alert(`Lo siento, ${numeroUsuario} no es el número secreto`);
            if(numeroUsuario > numeroSecreto){
                alert('El número secreto es menor');
            }else{
                alert('El número secreto es mayor');
            }
            // Incrementamos el contador, cuando el usuario no acierta
            intentos++;

            if(intentos > maximoIntentos){
                alert(`¡Llegaste al número máximo de ${maximoIntentos} intentos!`);
                break;
            }
        }
    }else{
        alert(`El número ingresado no está dentro del rango de ${min} y ${max}`);
    }  
}