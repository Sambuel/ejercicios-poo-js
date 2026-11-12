# Ejercicios POO en JavaScript

Ejercicios prácticos de Programación Orientada a Objetos en JavaScript vanilla con manipulación del DOM. Cada ejercicio practica uno de los pilares de la POO.

| Ejercicio | Pilar | Demo |
|---|---|---|
| [Cafetera](./cafetera) | Abstracción | [Probar](https://sambuel.github.io/ejercicios-poo-js/cafetera/) |
| [Login](./login) | Encapsulamiento | [Probar](https://sambuel.github.io/ejercicios-poo-js/login/) |
| Garage | Herencia | Próximamente |
| Nómina | Polimorfismo | Próximamente |

## Cafetera ☕

Una cafetera que prepara americano o espresso. Quien la usa solo llama a `prepararCafe(tipo)` y la clase se encarga por dentro de revisar ingredientes, calentar el agua, moler el café y servir.

- Clase con métodos privados (`#`) para los pasos internos
- Recetas guardadas en un objeto y consultadas con `this.recetas[tipo]`
- Lógica separada del DOM: la clase devuelve los mensajes y el DOM solo los muestra

## Login 🔐

Un login con usuario y contraseña que se bloquea después de 3 intentos fallidos, y deja cambiar la contraseña una vez que entras.

- Contraseña e intentos fallidos guardados en campos privados (`#password`, `#intentosFallidos`): nadie de afuera los puede leer ni cambiar
- Los métodos `login()` y `cambiarPassword()` devuelven `{ ok, mensaje }` y el DOM decide qué mostrar
- Formularios con `submit` + `preventDefault()`, cambio de pantalla con `classList` y botón bloqueado con `disabled`
