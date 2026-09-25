function calcularDescuento(precio, porcentaje) {
  // Rechazamos porcentajes fuera del rango permitido.
  if (porcentaje < 0 || porcentaje > 100) {
    return "Porcentaje inválido";
  }

  // Calculamos cuánto dinero se descontará.
  const descuento = precio * porcentaje / 100;

  // Devolvemos el precio final.
  return precio - descuento;
}

function validarPassword(password) {
  return password.length >= 8 && /\d/.test(password);
}

function celsiusAFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function esMayorDeEdad(edad) {
  return edad >= 18;
}

function generarNombreCompleto(nombre, apellido) {
  return nombre + " " + apellido;
}

// Permitimos importar la función desde el archivo de pruebas.
module.exports = {
  calcularDescuento,validarPassword,celsiusAFahrenheit,esMayorDeEdad,generarNombreCompleto
};
