// referencias HTML 



class Usuario{

    // propiedades y/o atributos
    nombre;
    #password;
    #intentosFallidos = 0 ;

    // constructor
    constructor(nombre,password){
        this.nombre = nombre;
        this.#password = password;
    }
    // metodos 

    estaBloqueado(){
        if (this.#intentosFallidos >= 3){
            return true;
        }
        return false
    }


    login(password){
        const condicion = this.estaBloqueado();
        if( condicion === true){
            // return "cuenta bloqueada";
            return {ok:false, mensaje: "cuenta bloqueada"};
        }
        else if (password !== this.#password){
            this.#intentosFallidos += 1;
            return { ok: false, mensaje: "Contraseña incorrecta" }
        }
        else{
            this.#intentosFallidos = 0;
            // return "Bienvenido";
            return {ok:true, mensaje: `Bienvenido ${this.nombre}`};
        }
    }

    cambiarPassword(actual, nueva){
        if (actual !== this.#password) {
            // return "error"
            return {ok:false, mensaje: "La contraseña actual es incorrecta"}
        }
        
        if (nueva.length < 4) {
            return {ok:false, mensaje: "La nueva contraseña debe tener al menos 4 caracteres."}
        }

        else{
            this.#password = nueva;
            return {ok: true, mensaje: "Contraseña actualizada"}
        }
    }

};


const prueba = new Usuario("samuel","71973719");
console.log(prueba.estaBloqueado());
console.log(prueba.login("81939"));
console.log(prueba.login("81939"));
console.log(prueba.cambiarPassword("71973719","182918210"));






