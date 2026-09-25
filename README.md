# Ejercicios básicos de pruebas unitarias con Jest

Proyecto educativo para validar cinco funciones de JavaScript mediante 25 pruebas unitarias escritas manualmente. Se practican casos habituales, entradas que incumplen las reglas y valores límite.

## Tecnologías

- JavaScript y Node.js.
- npm para gestionar dependencias.
- Jest 30.5, versión indicada para la actividad.
- CommonJS: `module.exports` para exportar y `require` para importar.

## Archivos del proyecto

| Archivo | Propósito |
| --- | --- |
| `funciones.js` | Implementación y exportación de las cinco funciones. |
| `funciones.test.js` | Importación de las funciones y 25 pruebas unitarias. |
| `package.json` | Dependencias y script de ejecución de Jest. |
| `package-lock.json` | Registro de las versiones resueltas de las dependencias. |
| `.gitignore` | Exclusión de archivos y carpetas que no deben subirse al repositorio. |
| `README.md` | Documentación del proyecto. |

Las funciones y las pruebas deben permanecer en sus respectivos archivos.

## Instalación y ejecución

Se requiere tener Node.js y npm instalados. Desde la terminal, dentro de la carpeta del proyecto:

```bash
npm install
npm test
```

El archivo `package.json` debe incluir el script `"test": "jest"` dentro de `"scripts"`. El proyecto utiliza `"type": "commonjs"`.

Contenido de `.gitignore`:

```gitignore
node_modules/
coverage/
.env
```

Se conserva `package-lock.json` en el repositorio.

## Funciones implementadas

### calcularDescuento(precio, porcentaje)

Devuelve el precio final al restar el descuento: `precio - (precio * porcentaje / 100)`. Si el porcentaje es menor que 0 o mayor que 100, devuelve exactamente `"Porcentaje inválido"`. Los porcentajes 0 y 100 están permitidos.

### validarPassword(password)

Devuelve `true` cuando el texto tiene al menos ocho caracteres y contiene algún dígito del 0 al 9; devuelve `false` si no cumple ambas condiciones. Utiliza `password.length >= 8`, la expresión regular `/\d/` y el operador `&&`. Según las reglas de este ejercicio, una contraseña compuesta únicamente por ocho números es válida.

### celsiusAFahrenheit(celsius)

Convierte una temperatura aplicando la fórmula `(celsius * 9 / 5) + 32` y devuelve el resultado numérico en grados Fahrenheit.

### esMayorDeEdad(edad)

Devuelve el resultado de `edad >= 18`: `true` desde los 18 años y `false` para edades menores.

### generarNombreCompleto(nombre, apellido)

Concatena el nombre, un espacio y el apellido mediante `nombre + " " + apellido`. Conserva las tildes y los espacios presentes en los valores originales.

## Casos de prueba y resultados esperados

Cada fila corresponde a una prueba del archivo `funciones.test.js`. Las entradas se muestran en el orden de los parámetros de cada función.

### Descuentos — 5 pruebas

| Prueba | Entradas | Resultado esperado | Qué valida |
| --- | --- | --- | --- |
| calcular descuento | `1000, 20` | `800` | Aplicación de un descuento habitual. |
| calcular descuento del 0% | `1000, 0` | `1000` | El límite inferior conserva el precio. |
| calcular descuento del 100% | `1000, 100` | `0` | El límite superior descuenta todo el precio. |
| Porcentaje negativo | `1000, -1` | `"Porcentaje inválido"` | Rechazo de porcentajes menores que cero. |
| Porcentaje mayor que 100 | `1000, 120` | `"Porcentaje inválido"` | Rechazo de porcentajes superiores al máximo. |

### Contraseñas — 5 pruebas

| Prueba | Entrada | Resultado esperado | Qué valida |
| --- | --- | --- | --- |
| Exactamente 8 caracteres con números | `"abc12345"` | `true` | Longitud mínima permitida y presencia de números. |
| Ocho letras, sin números | `"abcdefgh"` | `false` | La longitud suficiente no reemplaza el requisito de un número. |
| Siete caracteres con un número | `"abcdef1"` | `false` | Tener un número no reemplaza la longitud mínima. |
| Solo números, longitud suficiente | `"12345678"` | `true` | No se exige incluir letras. |
| Texto vacío | `""` | `false` | Rechazo de una cadena sin caracteres. |

### Temperaturas — 5 pruebas

| Prueba | Entrada en °C | Resultado esperado en °F | Qué valida |
| --- | --- | --- | --- |
| Cero grados | `0` | `32` | Conversión del valor cero. |
| Temperatura positiva | `25` | `77` | Conversión de una temperatura positiva. |
| Temperatura negativa | `-10` | `14` | Conversión de una temperatura negativa. |
| Temperatura alta | `100` | `212` | Aplicación de la fórmula a 100 °C. |
| Coincidencia de ambas escalas | `-40` | `-40` | Punto en el que ambas escalas coinciden. |

### Mayoría de edad — 5 pruebas

| Prueba | Entrada | Resultado esperado | Qué valida |
| --- | --- | --- | --- |
| Justo antes de la mayoría de edad | `17` | `false` | Valor inmediatamente inferior al límite. |
| Exactamente la mayoría de edad | `18` | `true` | Inclusión de los 18 años. |
| Justo después de la mayoría de edad | `19` | `true` | Valor inmediatamente superior al límite. |
| Persona adulta | `25` | `true` | Edad superior al mínimo. |
| Cero años | `0` | `false` | Una edad de cero no cumple la condición. |

### Nombres completos — 5 pruebas

| Prueba | Entradas | Resultado esperado | Qué valida |
| --- | --- | --- | --- |
| Nombre sencillo | `"Ana", "Martínez"` | `"Ana Martínez"` | Unión de nombre y apellido con un espacio. |
| Otro nombre | `"Luis", "Ramírez"` | `"Luis Ramírez"` | Concatenación con otra combinación. |
| Nombre con tilde | `"Ángel", "Ochoa"` | `"Ángel Ochoa"` | Conservación de la tilde del nombre. |
| Nombre compuesto | `"Ana María", "López"` | `"Ana María López"` | Conservación del espacio interno del nombre. |
| Apellido compuesto | `"Luis", "de la Cruz"` | `"Luis de la Cruz"` | Conservación de los espacios internos del apellido. |

## Cómo están estructuradas las pruebas

- `test()` registra una prueba con una descripción y una función que contiene la comprobación.
- `expect()` recibe el resultado de ejecutar la función evaluada.
- `.toBe()` compara ese resultado con el valor esperado usando igualdad basada en `Object.is`.

En estas pruebas se comparan números, booleanos y textos. En los textos deben coincidir las tildes, las mayúsculas y los espacios. Los valores booleanos `true` y `false` se escriben sin comillas.

## Resultado observado

La última ejecución compartida desde la terminal del proyecto mostró:

```text
Test Suites: 1 passed, 1 total
Tests:       25 passed, 25 total
Snapshots:   0 total
```

Se ejecutó una suite con cinco pruebas por función y todas pasaron. Este resultado procede de la ejecución local compartida por el autor; no representa una ejecución adicional realizada para redactar este documento. No se utilizó un reporte de cobertura, por lo que no se afirma un porcentaje de cobertura.

## Problemas encontrados y soluciones

| Problema | Causa identificada | Solución |
| --- | --- | --- |
| `Error: no test specified` | El script de npm seguía siendo el predeterminado. | Configurar `"test": "jest"` en `package.json`. |
| `EJSONPARSE` | `package.json` comenzaba con la sección `scripts` sin el objeto exterior. | Restaurar un documento JSON completo y válido. |
| `Your test suite must contain at least one test` | El archivo de pruebas no contenía ninguna prueba registrada. | Escribir la primera prueba mediante `test()`. |
| Error de sintaxis en `expect` | Se copiaron frases explicativas como si fueran código. | Sustituirlas por una llamada real y un resultado esperado. |
| Paréntesis faltante | No se cerró `expect()` antes de `.toBe()`. | Cerrar tanto la llamada a la función como `expect()`. |
| Diferencia entre `invalido` e `inválido` | El texto esperado no coincidía con la tilde del mensaje requerido. | Corregir la cadena esperada conservando el mensaje del enunciado. |
| `NaN` en las pruebas de contraseñas | Se llamó a `calcularDescuento` en lugar de `validarPassword`, sin proporcionar un porcentaje. | Corregir la función invocada en las cinco pruebas nuevas. |
| `Identifier 'exports' has already been declared` | Se incluyó `exports` como identificador declarado en el archivo de pruebas. | Dejar únicamente los nombres de las funciones en la importación. |
| `generarNombreCompleto is not defined` | El nombre exportado no tenía una definición accesible. | Agregar o corregir la definición de la función en `funciones.js`. |
| Descripciones duplicadas o ajenas al caso | Se conservaron nombres de otras pruebas al adaptarlas. | Renombrar los casos para describir la comprobación correspondiente. |

## Alcance y aprendizajes

Las funciones implementan las reglas de la actividad con entradas del tipo esperado: números para descuentos, temperatura y edad; cadenas para contraseñas y nombres. No se añadieron validaciones generales de tipos, redondeo monetario ni limpieza de espacios. El comportamiento ante `null`, argumentos omitidos u otros tipos no forma parte de estas 25 pruebas.

Que todas las pruebas pasen confirma los escenarios comprobados; no garantiza que se hayan cubierto todas las entradas posibles.

El ejercicio permitió practicar la separación entre implementación y pruebas, la selección de valores límite, la lectura de errores de sintaxis y de resultados inesperados, y la importancia de describir cada caso con precisión.

## Uso de IA

Se utilizó IA como apoyo para implementar y explicar funciones, proponer escenarios, revisar errores y redactar documentación. Las pruebas fueron escritas manualmente por el estudiante, siguiendo las instrucciones de la actividad.

## Referencia

[Documentación oficial de Jest](https://jestjs.io/docs/getting-started)
