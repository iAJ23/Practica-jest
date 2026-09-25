const {
  calcularDescuento,
  validarPassword,
  celsiusAFahrenheit,
  esMayorDeEdad,
  generarNombreCompleto
} = require("./funciones");

test("calcular descuento", () => {
  expect(calcularDescuento(1000,20)).toBe(800);
});

test("calcular descuento del 0%", () => {
  expect(calcularDescuento(1000,0)).toBe(1000);
});
test("calcular descuento del 100%", () => {
  expect(calcularDescuento(1000,100)).toBe(0);
});
test("Porcentaje negativo", () => {
  expect(calcularDescuento(1000,-1)).toBe("Porcentaje inválido");
});
test("Porcentaje mayor que 100", () => {
  expect(calcularDescuento(1000,120)).toBe("Porcentaje inválido");
});


test("Exactamente 8 caracteres con números", () => {
  expect(validarPassword("abc12345")).toBe(true);
});
test("Ocho letras, sin números", () => {
  expect(validarPassword("abcdefgh")).toBe(false);
});
test("Siete caracteres con un número", () => {
  expect(validarPassword("abcdef1")).toBe(false);
});
test("Solo números, longitud suficiente", () => {
  expect(validarPassword("12345678")).toBe(true);
});
test("Texto vacío", () => {
  expect(validarPassword("")).toBe(false);
});


test("Cero grados", () => {
  expect(celsiusAFahrenheit(0)).toBe(32);
});
test("Temperatura positiva", () => {
  expect(celsiusAFahrenheit(25)).toBe(77);
});
test("Temperatura negativa", () => {
  expect(celsiusAFahrenheit(-10)).toBe(14);
});
test("Temperatura alta", () => {
  expect(celsiusAFahrenheit(100)).toBe(212);
});
test("Coincidencia de ambas escalas", () => {
  expect(celsiusAFahrenheit(-40)).toBe(-40);
});


test("Justo antes de la mayoría de edad", () => {
  expect(esMayorDeEdad(17)).toBe(false);
});
test("Exactamente la mayoría de edad", () => {
  expect(esMayorDeEdad(18)).toBe(true);
});
test("Justo después de la mayoría de edad", () => {
  expect(esMayorDeEdad(19)).toBe(true);
});
test("Persona adulta", () => {
  expect(esMayorDeEdad(25)).toBe(true);
});
test("Cero años", () => {
  expect(esMayorDeEdad(0)).toBe(false);
});

test("Nombre sencillo", () => {
  expect(generarNombreCompleto("Ana", "Martínez")).toBe("Ana Martínez");
});
test("Otro nombre", () => {
  expect(generarNombreCompleto("Luis", "Ramírez")).toBe("Luis Ramírez");
});
test("Nombre con tilde", () => {
  expect(generarNombreCompleto("Ángel","Ochoa")).toBe("Ángel Ochoa");
});
test("Nombre compuesto", () => {
  expect(generarNombreCompleto("Ana María", "López")).toBe("Ana María López");
});
test("Apellido compuesto", () => {
  expect(generarNombreCompleto("Luis","de la Cruz")).toBe("Luis de la Cruz");
});
