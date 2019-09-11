//Declaración de variables

var nombreUsuario = 'Lucas Tuozzo';
var saldoCuenta = 7000;
var limiteExtraccion = 2000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseInt(prompt('Ingrese el nuevo límite de extracción', "0"));
    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla();
    alert('El nuevo límite es de: $' + limiteExtraccion)
}

function extraerDinero() {
    //Le pido al usuario que ingrese el dinero a retirar
    var dineroARetirar = parseInt(prompt('Ingrese la cantidad que desea retirar', "0"));
    //Chequeo que sea un monto válido
    var montoAprobado = montoValido(dineroARetirar);

    //Si el monto es válido, realizo la extracción
    if(montoAprobado){
        //Actualizo el saldo
        var saldoAnt = saldoCuenta;
        saldoCuenta -= dineroARetirar;
        actualizarSaldoEnPantalla();
        alert('Has retirado: $' + dineroARetirar + '\nSaldo anterior: $' + saldoAnt + '\nSaldo actual: $' + saldoCuenta)
    }
    
}

function montoValido (monto){
    //Chequeo que haya ingresado un número positivo, y no letras
    if(monto > 0){
        //Chequeo que haya saldo en la cuenta
        if (monto <= saldoCuenta){
            //Chequeo que no supere el límite
            if(monto <= limiteExtraccion){
                //Chequeo que quiera sacar en billetes de $100
                if(monto % 100 === 0){
                    return true;
                } else {
                    alert('Solo puedes extraer billetes de 100.');
                    return false;
                }
            } else {
                alert('La cantidad de dinero que deseas extraer es mayor a tu límite de extracción.');
                return false;
            }
        } else {
            alert('No hay saldo disponible en tu cuenta para extrar esa cantidad de dinero.');
            return false;
        }
    } else {
        alert('El importe ingresado no es válido.');
        return false;
    }
}

function depositarDinero() {

    //Le pido al usuario que ingrese el dinero a depositar
    var dineroADepositar = parseInt(prompt('Ingrese la cantidad que desea depositar', "0"));
    
    //Chequeo que haya ingresado un número positivo, y no letras
    if(dineroADepositar > 0){
        //Actualizo el saldo
        var saldoAnt = saldoCuenta;
        saldoCuenta += dineroADepositar;
        actualizarSaldoEnPantalla();
        alert('Has depositado: $' + dineroADepositar + '\nSaldo anterior: $' + saldoAnt + '\nSaldo actual: $' + saldoCuenta)
    } else {
        alert('El importe ingresado no es válido.')
    }

}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}