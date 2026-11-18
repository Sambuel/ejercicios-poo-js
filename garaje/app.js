// Referencias HTML 
// Agregar
const formAgregar = document.querySelector("#formAgregar");
const selectAgregar = document.querySelector("#selectAgregar");
const inputMarca = document.querySelector("#inputMarca");
const inputModelo = document.querySelector("#inputModelo");
const inputExtra = document.querySelector("#inputExtra");

// controlar
const selectControlar = document.querySelector("#selectControlar");
const btnEncender = document.querySelector("#btnEncender");
const btnApagar = document.querySelector("#btnApagar");
const btnAccion = document.querySelector("#btnAccion");

// mostrar
const listaVehiculos = document.querySelector("#listaVehiculos");
const mensajeFinal = document.querySelector("#mensajeFinal");



class Vehiculo {

    marca;
    modelo;
    encendido = false;

    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }


    encender(){
        if(this.encendido){
            return {ok:false, mensaje:"El vehiculo ya esta encendido"}
        }
        else{
            this.encendido = true;
            return {ok:true, mensaje:"Vehiculo encendido"}
        }
    }

    apagar(){
        if (!this.encendido) {
            return {ok:false, mensaje:"el vehiculo se encuentra apagado"}
        }
        else{
            this.encendido = false;
            return {ok:true, mensaje:"Vehiculo apagado"}
        }
    }


    describir(){
        return `${this.marca} ${this.modelo}`
    }
}


class Auto extends Vehiculo{

    puertas;

    constructor(marca,modelo,puertas){
        super(marca,modelo)
        this.puertas = puertas;
    }

    tocarClaxon(){
        if (!this.encendido) {
            return {ok:false, mensaje:"No se puede tocar claxon"}
        }
        else{
            return{ok:true,mensaje:"Piii piii"}
        }
    }
}


class Moto extends Vehiculo{
    cilindrada;
    constructor(marca,modelo,cilindrada){
        super(marca,modelo)
        this.cilindrada = cilindrada;
    }

    hacerCaballito(){
        if(!this.encendido){
            return {ok:false, mensaje:"no se puede hacer caballito"}
        }
        else{
            return {ok:true, mensaje:"!Caballitooo¡¡"}
        }
    }
}

// lista donde se hace el push de los carros
const garaje = [];

// funcion que se ejecuta cuando se queremos mostrar el vehiculo agregado
const mostrarLista = () => {
    let estado;
    listaVehiculos.innerHTML = "";
    garaje.forEach((vehiculo) => {

        if (vehiculo.encendido) {
            estado = "Encendido";
        }
        else{
            estado = "Apagado";
        }

        const li = document.createElement("li");
        li.textContent = `${vehiculo.describir()} - ${estado}`;
        listaVehiculos.append(li);
    })
}


const actualizarSelect = () => {
    selectControlar.innerHTML = "";
    garaje.forEach((vehiculo,indice) => {
        const opcion = document.createElement("option");
        opcion.value = indice;
        opcion.textContent = vehiculo.describir();
        selectControlar.append(opcion);
    })
} 


// listeners
formAgregar.addEventListener("submit", (e) => {
    e.preventDefault()
    const valorVehiculo = selectAgregar.value;
    const valorMarca = inputMarca.value;
    const valorModelo = inputModelo.value;
    const valorPuertasCil = Number(inputExtra.value);
    
    let vehiculo;

    if (valorVehiculo === "auto") {
        vehiculo = new Auto(valorMarca,valorModelo,valorPuertasCil);
    }
    else{
        vehiculo = new Moto(valorMarca,valorModelo,valorPuertasCil);
    }
    
    garaje.push(vehiculo);
    mensajeFinal.textContent = "Vehiculo agregado.";


    mostrarLista();
    actualizarSelect();

    inputMarca.value = "";
    inputModelo.value = "";
    inputExtra.value = "";

})





btnEncender.addEventListener("click", () => {
    // 1. si no hay vehiculos, avisar y cortar
    if (garaje.length === 0) {
        mensajeFinal.textContent = "Primero agrega un vehículo";
        return;
    }

    // 2. sacar el vehiculo elegido en el select (su value es el indice)
    const vehiculo = garaje[selectControlar.value];

    // 3. llamar a su metodo (heredado de Vehiculo)
    const resultado = vehiculo.encender();

    // 4. mostrar el mensaje y redibujar la lista
    mensajeFinal.textContent = resultado.mensaje;
    mostrarLista();
});


btnApagar.addEventListener("click", () => {
    if (garaje.length === 0) {
        mensajeFinal.textContent = "Primero agrega un vehículo";
        return;
    }

    const vehiculo = garaje[selectControlar.value];
    const resultado = vehiculo.apagar();

    mensajeFinal.textContent = resultado.mensaje;
    mostrarLista();
});


btnAccion.addEventListener("click", () => {
    if (garaje.length === 0) {
        mensajeFinal.textContent = "Primero agrega un vehículo";
        return;
    }

    const vehiculo = garaje[selectControlar.value];
    let resultado;

    // instanceof pregunta: "¿este objeto se creo con esta clase?"
    if (vehiculo instanceof Auto) {
        resultado = vehiculo.tocarClaxon();
    }
    else {
        resultado = vehiculo.hacerCaballito();
    }

    mensajeFinal.textContent = resultado.mensaje;
});


// const prueba = new Vehiculo("toyota","corolla");
// const prueba2 = new Auto("toyota","corolla",4);
// console.log(prueba2);
// console.log(prueba2.tocarClaxon());

// const prueba3 = new Moto("bajaj","pulsar",250);
// console.log(prueba3.hacerCaballito());





