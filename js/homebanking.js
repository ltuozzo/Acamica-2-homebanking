//Declaración de variables

var nombreUsuario = 'Lucas Tuozzo';
var saldoCuenta = 7000;
var limiteExtraccion = 2000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseInt(prompt('Ingrese el nuevo límite de extracción', "0"));

    if ((!isNaN(nuevoLimite)) && (nuevoLimite >= 0)){
        limiteExtraccion = nuevoLimite;
        actualizarLimiteEnPantalla();
        alert('El nuevo límite es de: $' + limiteExtraccion);
    }
}

function extraerDinero() {
    //Le pido al usuario que ingrese el dinero a retirar
    var dineroARetirar = parseInt(prompt('Ingrese la cantidad que desea retirar', "0"));
    //Chequeo que sea un monto válido
    var montoAprobado = montoValido(dineroARetirar);

    //Si el monto es válido, realizo la extracción
    if (montoAprobado) {
        //Actualizo el saldo
        var saldoAnt = saldoCuenta;
        saldoCuenta -= dineroARetirar;
        actualizarSaldoEnPantalla();
        alert('Has retirado: $' + dineroARetirar + '\nSaldo anterior: $' + saldoAnt + '\nSaldo actual: $' + saldoCuenta)
    }

}

function montoValido(monto) {
    if (!isNaN(monto)){
        //Chequeo que haya ingresado un número positivo
        if (monto > 0) {
            //Chequeo que haya saldo en la cuenta
            if (monto <= saldoCuenta) {
                //Chequeo que no supere el límite
                if (monto <= limiteExtraccion) {
                    //Chequeo que quiera sacar en billetes de $100
                    if (monto % 100 === 0) {
                        return true;
                    } else {
                        alert('Solo puedes extraer billetes de 100.');
                    }
                } else {
                    alert('La cantidad de dinero que deseas extraer es mayor a tu límite de extracción.');
                }
            } else {
                alert('No hay saldo disponible en tu cuenta para extrar esa cantidad de dinero.');
            }
        } else {
            alert('El importe ingresado no es válido.')
        }
    }
    return false;
}

function depositarDinero() {

    //Le pido al usuario que ingrese el dinero a depositar
    var dineroADepositar = parseInt(prompt('Ingrese la cantidad que desea depositar', "0"));

    //Chequeo que haya ingresado un número positivo, y no letras
    if ((dineroADepositar > 0) && (!isNaN(dineroADepositar))) {
        //Actualizo el saldo
        var saldoAnt = saldoCuenta;
        saldoCuenta += dineroADepositar;
        actualizarSaldoEnPantalla();
        alert('Has depositado: $' + dineroADepositar + '\nSaldo anterior: $' + saldoAnt + '\nSaldo actual: $' + saldoCuenta)
    }
}

function pagarServicio() {

    //Servicios disponibles
    var agua = 350;
    var telefono = 425;
    var luz = 210;
    var internet = 570;

    //Le pido al usuario que elija el servicio a abonar
    var servicioAPagar = parseInt(prompt('Elija el número que corresponda con el servicio que quiera abonar \n1 - Agua\n2 - Luz\n3 - Internet\n4 - Teléfono'));

    //Verifico que haya ingresado un número
    if (!isNaN(servicioAPagar)){
        //Dependiendo del número ingresado, realizo una acción
        switch(servicioAPagar) {
            case 1:
                verificarSaldoYPagar(agua, 'Agua');
                break;
            case 2:
                verificarSaldoYPagar(luz, 'Luz');
                break;
            case 3:
                verificarSaldoYPagar(internet, 'Internet');
                break;
            case 4:
                verificarSaldoYPagar(telefono, 'Teléfono');
                break;
            default:
                alert('El servicio ingresado no es válido');
        }
    }
}

function verificarSaldoYPagar(valorServicio, nombreServicio){
    //Verifico que haya saldo en la cuenta
    if (valorServicio <= saldoCuenta){
        //Si hay saldo, descuento el importe pagado y notifico al usuario
        var saldoAnt = saldoCuenta;
        saldoCuenta -= valorServicio;
        actualizarSaldoEnPantalla();
        alert('Has pagado el servicio de ' + nombreServicio + '\nSaldo anterior: $' + saldoAnt + '\nDinero descontado: $' + valorServicio + '\nSaldo actual: $' + saldoCuenta);
    } else {
        alert('No hay suficiente saldo en tu cuenta para pagar este servicio');
    }
}

function transferirDinero() {
    //Defino las cuentas amigas
    var cuentaAmiga1 = 1234567;
    var cuentaAmiga2 = 7654321;

    //Le pido al usuario que ingrese el importe a transferir
    var dineroATransferir = parseInt(prompt('Ingrese la cantidad que desea transferir', "0"));
    
    //Verifico que sea un importe válido y que haya saldo
    if (!isNaN(dineroATransferir)){
        if (dineroATransferir <= saldoCuenta){
            //Le pido que ingrese la cuenta amiga
            var cuentaAmiga = parseInt(prompt('Ingrese la cuenta a la que desea transferir'));

            //Verifico que sea una cuenta amiga
            if ((cuentaAmiga == cuentaAmiga1) || (cuentaAmiga1 == cuentaAmiga2)){
                saldoCuenta -= dineroATransferir;
                actualizarSaldoEnPantalla();
                alert('Se han transferido: $' + dineroATransferir + '\nCuenta destino: ' + cuentaAmiga);
            } else {
                alert('Solo se puede transferir a una cuenta amiga. La operación fue cancelada.');
            }
        } else {
            alert('No tiene saldo suficiente para realizar esa transferencia');
        }
    }
}

function iniciarSesion() {
    var contraseña = 1234;

    var contrasenaIngresada = parseInt(prompt('Ingrese su contraseña'));

    if (contrasenaIngresada == contraseña){
        alert('Bienvenido ' + nombreUsuario + ', ya puedes comenzar a realizar operaciones')
    } else {
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
        alert('Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.');
    }
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