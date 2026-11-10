# Ejercicios POO en JavaScript

Ejercicios prácticos de Programación Orientada a Objetos en JavaScript vanilla con manipulación del DOM. Cada ejercicio practica uno de los pilares de la POO.

| Ejercicio | Pilar | Demo |
|---|---|---|
| [Cafetera](./cafetera) | Abstracción | [Probar](https://sambuel.github.io/ejercicios-poo-js/cafetera/) |
| Login | Encapsulamiento | Próximamente |
| Garage | Herencia | Próximamente |
| Nómina | Polimorfismo | Próximamente |

## Cafetera ☕

Una cafetera que prepara americano o espresso. Quien la usa solo llama a `prepararCafe(tipo)` y la clase se encarga por dentro de revisar ingredientes, calentar el agua, moler el café y servir.

- Clase con métodos privados (`#`) para los pasos internos
- Recetas guardadas en un objeto y consultadas con `this.recetas[tipo]`
- Lógica separada del DOM: la clase devuelve los mensajes y el DOM solo los muestra

## Otros proyectos

- [Banco POO](https://github.com/Sambuel/banco-poo-js): simulador de cuenta bancaria con clases y DOM
- [Blackjack](https://github.com/Sambuel/blackjack-js): juego de Blackjack con JavaScript vanilla
