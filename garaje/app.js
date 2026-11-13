
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



// const prueba = new Vehiculo("toyota","corolla");
const prueba2 = new Auto("toyota","corolla",4);
console.log(prueba2);
console.log(prueba2.tocarClaxon());

const prueba3 = new Moto("bajaj","pulsar",250);
console.log(prueba3.hacerCaballito());




