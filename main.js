let cantidad = document.getElementById('cantidad'); //var (ya no se usa), let y const(no cambia en el tiempo)
let boton= document.getElementById('generar');
let contrasena= document.getElementById('contrasena');
let validacion= document.getElementById('validacion');

const cadenaCaracteres= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){

    let numeroDigitado= parseInt (cantidad.value);
    //console.log(numeroDigitado); nos sirve para visualizar el numero digitado en la consola

    if (numeroDigitado < 8){
        alert("La cantidad de caracteres debe ser mayor que 8");
        return;  //para denegar la generación de una contraseña de menor a 8 caracteres
        }

        let password = '';
        for(let i=0; i < numeroDigitado; i++){

            let caracterAleatorio= cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            console.log(caracterAleatorio);

            password += caracterAleatorio;

        }

        //console.log("Password generada: " + password);
        contrasena.value = password;
        validar(password);

}

function validar(password) {
    
    const pMayuscula = /[A-Z]/.test(password);
    const pMinuscula = /[a-z]/.test(password);
    const pNumero = /\d/.test(password);
    const pCaracterEspecial = /[!@#$%^&*()]/.test(password);

    if (password.length >= 8 && pMayuscula && pMinuscula && pNumero && pCaracterEspecial) {
        validacion.textContent = "Contraseña fuerte.";
        
    } else {
        validacion.textContent = "Contraseña débil. La contraseña no incluye mayúsculas, minúsculas, números y caracteres especiales.";
    }
}


function limpiar(){
    contrasena.value = "";
    validacion.textContent = "";
}










