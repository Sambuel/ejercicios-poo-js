// referencias HTML 

// forms
const formLogin = document.querySelector(".formLogin");
const formCambiar = document.querySelector(".formLogin2");

// cajas o secciones
const seccion1 = document.querySelector(".cajaUno");
const seccion2 = document.querySelector(".cajaDos");

// inputs
const datoInputUsuario = document.querySelector("#inputUsuario");
const datoInputPassword = document.querySelector("#inputPassword");
const datoInputActual = document.querySelector("#inputActual");
const datoInputNuevaPass = document.querySelector("#inputNueva");

// boton
const btn = document.querySelector("#btnEntrar");



// mensaje final
const final = document.querySelector(".mensajeFinal")

// titulo de bienvenida (pantalla 2)
const tituloBienvenida = document.querySelector("#bienvenida");


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


    login(password,user){
        const condicion = this.estaBloqueado();
        if( condicion === true){
            // return "cuenta bloqueada";
            return {ok:false, mensaje: "cuenta bloqueada"};
        }
        else if (password !== this.#password){
            this.#intentosFallidos += 1;
            return { ok: false, mensaje: "Contraseña incorrecta" }
        }

        else if(user !== this.nombre){
            this.#intentosFallidos += 1
            return {ok:false, mensaje:"Usuario incorrecto"}
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


formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = datoInputPassword.value;
    const verificarUsuario = datoInputUsuario.value;
    const valorGuardado = prueba.login(valor,verificarUsuario)
    const botonBloqueado = prueba.estaBloqueado()
    final.textContent = valorGuardado["mensaje"]

    if (valorGuardado["ok"] === true) {
        seccion1.classList.add("oculto")
        seccion2.classList.remove("oculto")
        tituloBienvenida.textContent = `Hola ${prueba.nombre} `;
    }
    else if (botonBloqueado === true){
        btn.disabled = true;
        final.textContent = "intentos excedidos"
    }
});

formCambiar.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const passwordActual = datoInputActual.value;
    const nueva = datoInputNuevaPass.value;
    const valorGuardado = prueba.cambiarPassword(passwordActual,nueva);
    final.textContent = valorGuardado["mensaje"];
    
})




const prueba = new Usuario("samuel","12345");
// console.log(prueba.estaBloqueado());
// console.log(prueba.login("81939"));
// console.log(prueba.login("81939"));
// console.log(prueba.cambiarPassword("71973719","182918210"));






