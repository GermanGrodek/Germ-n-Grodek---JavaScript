let menu

function menuPrincipal () {
    do {
        menu = prompt(" 1- Computadoras \n 2- Soporte tecnico \n 3- Consultar precio final \n 4- Salir")
        menu = parseInt(menu)
        switch (menu) {
            case 1: comprarComputadora ();
            break
            case 2: alert("Llame al número 0800-8000-8888 para recibir asistencia tecnica");
            break
            case 3: alert("Su total sería $" + acumulador);
            break
            case 4: alert("Saliendo");
            break
            default: alert("Opción invalida")
        }
    } while (menu != 4)
} 

let acumulador = 0

function comprarComputadora() {
    acumulador = parseInt(acumulador)
    let seleccion = prompt("Seleccione una opción para comprar su computadora \n 1- Economica ($75.000) \n 2- Gama media ($150.000) \n 3- Gama alta ($300.000)")
    seleccion = parseInt(seleccion)
    let cantidad
    cantidad = parseInt(cantidad)

    switch (seleccion) {
        case 1:
            alert("Opción economica seleccionada")
            cantidad = prompt("Seleccione cantidad")
            if (cantidad < 0) {alert("Cantidad ingresada incorrecta")}
            else { acumulador = acumulador + 75000 * cantidad}
            alert ("Su total es de $" + acumulador)
            break
        case 2:
            alert("Opción gama media seleccionada")
            cantidad = prompt("Seleccione cantidad")
            if (cantidad < 0) {alert("Cantidad ingresada incorrecta")}
            else { acumulador = acumulador + 150000 * cantidad}
            alert ("Su total es de $" + acumulador)
            break
        case 3:
            alert("Opción gama alta seleccionada")
            cantidad = prompt("Seleccione cantidad")
            if (cantidad < 0) {alert("Cantidad ingresada incorrecta")}
            else { acumulador = acumulador + 300000 * cantidad}
            alert ("Su total es de $" + acumulador)
            break
        default:
            alert("Opción invalida")
    }
    return acumulador
}

menuPrincipal ()
