///FUNCIÓN CONSTRUCTORA

function pc(nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;
}

const pcEco = new pc("PC Economica", 75000, 7);
const pcGamaMedia = new pc("PC Gama Media", 150000, 10);
const pcGamaAlta = new pc("PC Gama Alta", 300000, 3);

///ARRAY CONTACTO

let contactos = [];

///MENU PRINCIPAL
let menu;

function menuPrincipal() {
  do {
    menu = prompt(
      " 1- Tienda de computadoras \n 2- Consultar precio final \n 3- Borrar carrito \n 4- Registrarse \n 5- Verificar que el correo este registrado  \n 6- Salir"
    );
    menu = parseInt(menu);
    switch (menu) {
      case 1:
        comprarComputadora();
        break;
      case 2:
        alert("Su total sería $" + acumulador);
        break;
      case 3:
        acumulador = 0;
        alert("Se borro el carrito, su saldo actual es de $" + acumulador);
        pcEco.stock = 7;
        pcGamaMedia.stock = 10;
        pcGamaAlta.stock = 3;
        break;
      case 4:
        contactanos();
        break;
      case 5:
        checkCorreo();
        break;
      case 6:
        alert("Saliendo");
        break;
      default:
        alert("Opción invalida");
    }
  } while (menu != 6);
}

let acumulador = 0;

///FUNCIÓN PARA REGISTRAR
function contactanos() {
  let ingresoCorreo = prompt(
    "Ingrese su correo electronico para que lo contactemos a la brevedad"
  );
  contactos.push(ingresoCorreo);
  alert("Correo " + ingresoCorreo + " ingresado con exito");
}

///FUNCION PARA VERIFICAR CORREO

function checkCorreo() {
  let checkC = prompt(
    "Ingrese su correo para validar que se encuentra en lista de espera"
  );
  if (contactos.find((contacto) => contacto === checkC)) {
    alert("El correo esta registrado con exito");
  } else {
    alert("El correo no esta registrado");
  }
}

///FUNCIÓN PARA SELECCIONAR COMPUTADORAS

function comprarComputadora() {
  acumulador = parseInt(acumulador);
  let selector2 = prompt(
    "Seleccione una opción \n 1- Economica ($75.000) \n 2- Gama media ($150.000) \n 3- Gama alta ($300.000) \n 4- Salir"
  );
  selector2 = parseInt(selector2);
  let cantidad;
  cantidad = parseInt(cantidad);

  switch (selector2) {
    case 1:
      alert("Opción economica seleccionada");
      cantidad = prompt("Seleccione cantidad");
      if (cantidad > pcEco.stock) {
        alert(
          "No hay stock suficiente, el actual es de " + pcEco.stock + " equipos"
        );
        break;
      } else {
        if (cantidad <= 0) {
          alert("Cantidad ingresada incorrecta");
        } else {
          acumulador = acumulador + pcEco.precio * cantidad;
          pcEco.stock = pcEco.stock - cantidad;
          alert("Su total es de $" + acumulador);
        }
        break;
      }

    case 2:
      alert("Opción gama media seleccionada");
      cantidad = prompt("Seleccione cantidad");
      if (cantidad > pcGamaMedia.stock) {
        alert(
          "No hay stock suficiente, el actual es de " +
            pcGamaMedia.stock +
            " equipos"
        );
        break;
      } else {
        if (cantidad <= 0) {
          alert("Cantidad ingresada incorrecta");
        } else {
          acumulador = acumulador + pcGamaMedia.precio * cantidad;
          pcGamaMedia.stock = pcGamaMedia.stock - cantidad;
          alert("Su total es de $" + acumulador);
        }
        break;
      }
    case 3:
      alert("Opción gama alta seleccionada");
      cantidad = prompt("Seleccione cantidad");
      if (cantidad > pcGamaAlta.stock) {
        alert(
          "No hay stock suficiente, el actual es de " +
            pcGamaAlta.stock +
            " equipos"
        );
        break;
      } else {
        if (cantidad <= 0) {
          alert("Cantidad ingresada incorrecta");
        } else {
          acumulador = acumulador + pcGamaAlta.precio * cantidad;
          pcGamaAlta.stock = pcGamaAlta.stock - cantidad;
          alert("Su total es de $" + acumulador);
        }
        break;
      }
    case 4:
      break;
    default:
      alert("Opción invalida");
  }
  return acumulador;
}

menuPrincipal();
