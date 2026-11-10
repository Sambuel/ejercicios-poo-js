class Cafetera {

    // atributos y/o propiedades

    agua = 1000;
    cafe = 100;

    recetas = {
        americano: { agua: 200, cafe: 15},
        espresso: { agua: 50, cafe: 20 } 
    };


    // metodos privados
    #hayIngredientes(tipo){
        const datos = this.recetas[tipo];

        if (this.agua < datos.agua) {
            return "No hay suficiente agua";
        }
        else if (this.cafe < datos.cafe){
            return "No hay suficiente café";
        }
        return null;
    }

    #calentarAgua(){
        return "Calentando agua...";
    }


    #molerCafe(){
        return "Moliendo café...";
    }

    #servir(tipo){
        const datos = this.recetas[tipo];

        this.cafe -= datos.cafe;
        this.agua -= datos.agua;
        return `Tu ${tipo} está listo ☕️`;
    }



    // metodos publicos 
    rellenar(){
        this.agua = 1000;
        this.cafe = 100;
        return ["Cafetera rellenada"];
    }

    prepararCafe(tipo){
        const resultado = this.#hayIngredientes(tipo);

        if (resultado !== null) {
            return [resultado];
        }
        return [this.#calentarAgua(),this.#molerCafe(),this.#servir(tipo)];
    }

};

const prueba = new Cafetera();

// referencias HTML 
const spanAgua = document.querySelector(".medidaAgua");
const spanCafe = document.querySelector(".medidaCafe");
const botonAmericano = document.querySelector("#btnAmericano");
const botonEspreso = document.querySelector("#btnEspresso");
const rellenarElementos = document.querySelector("#btnRellenar");
const mensajesFinales = document.querySelector(".contenedorListas");


// funciones
const vaciarAvisos = () => {
    mensajesFinales.innerHTML = "";
}

const mostrarMensajes = (mensajes) => {
    mensajes.forEach(elementos => {
        const li = document.createElement("li");
        li.textContent = elementos;
        mensajesFinales.append(li);
    });
    spanAgua.textContent = prueba.agua;
    spanCafe.textContent = prueba.cafe;
}

// listeners
botonAmericano.addEventListener("click", () => {
    const arreglo = prueba.prepararCafe("americano");
    vaciarAvisos();
    mostrarMensajes(arreglo);
})


botonEspreso.addEventListener("click", () => {
    const arreglo = prueba.prepararCafe("espresso");
    vaciarAvisos();
    mostrarMensajes(arreglo);
})


rellenarElementos.addEventListener("click", () => {
    const final = prueba.rellenar();
    spanAgua.textContent = prueba.agua;
    spanCafe.textContent = prueba.cafe;

    mensajesFinales.innerHTML = "";
    for(let i of final){
        const li = document.createElement("li");
        li.textContent = i;
        mensajesFinales.append(li)
    }
});