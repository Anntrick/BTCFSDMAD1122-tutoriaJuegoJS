
// Recoger la jugada del usuario
// Hacer la jugada de la máquina
// Comparar y guardar los datos
const jugar = () => {
    let jugadaUsuario = document.querySelector("#jugada")
    let jugadaMaquina = juegoMaquina()

    sessionStorage.setItem("juegosRealizados", parseInt(sessionStorage.getItem("juegosRealizados"))+1)
    
    if(jugadaMaquina == jugadaUsuario.value) {
        //Empate
        alert("Empate")
        //guardamos el dato en sessionStorage
        sessionStorage.setItem("juegosEmpatados", parseInt(sessionStorage.getItem("juegosEmpatados"))+1)
    } else if(
            (jugadaMaquina == "piedra" && jugadaUsuario.value == "tijeras") ||
            (jugadaMaquina == "tijeras" && jugadaUsuario.value == "papel") ||
            (jugadaMaquina == "papel" && jugadaUsuario.value == "piedra")
    ){
        //Gana la maquina
        alert("Ha ganado la maquina")

    } else if(
        (jugadaUsuario.value == "piedra" && jugadaMaquina == "tijeras") ||
        (jugadaUsuario.value == "tijeras" && jugadaMaquina == "papel") ||
        (jugadaUsuario.value == "papel" && jugadaMaquina == "piedra")
    ){
        //Gana el usuario
        alert("Has ganado, felicidades!")
        //guardamos el dato en sessionStorage
        sessionStorage.setItem("juegosGanados", parseInt(sessionStorage.getItem("juegosGanados"))+1)
    }

    pintaDatos()
    
}

const juegoMaquina = () => {
    let randMaquina = Math.floor(Math.random() * 3)
    let jugadaMaquina

    // if(randMaquina == 0)
    // if(randMaquina == 1)
    // if(randMaquina == 2)
    switch(randMaquina){
        case 0:
            jugadaMaquina = "piedra"
            break
        case 1:
            jugadaMaquina = "papel"
            break
        case 2:
            jugadaMaquina = "tijeras"
            break
    }
    return jugadaMaquina
}

//Añadimos los datos del usuario y el juego
const pintaDatos = () => {
    const contDatos = document.querySelector("#datosJugador")
    //Generamos el html con los datos del juego y lo añadimos al contenedor #datosJugador
    let contenido = `<p>Nombre: ${sessionStorage.getItem("nombreJugador")}</p> `
    //contenido = contenido + ...
    contenido += `<p>Veces jugado: ${sessionStorage.getItem("juegosRealizados")}</p> `
    contenido += `<p>Victorias: ${sessionStorage.getItem("juegosGanados")}</p> `

    contDatos.innerHTML = contenido
}

// Cargamos los datos iniciales del usuario en la pagina juego
const inicioJuego = () => {    
    //Comprobamos que no hayan variables del juego creadas
    if(sessionStorage.getItem("juegosRealizados") == null) {
        //Inicializamos los sessionStorage de jugadas, ganados y perdidos
        sessionStorage.setItem("juegosRealizados", 0)
        sessionStorage.setItem("juegosGanados", 0)
        sessionStorage.setItem("juegosEmpatados", 0)
    }
    
    pintaDatos()
}

// Comprobamos que hay un nombre escrito, lo guardamos y vamos a la pagina de juego
const entra = () => {
    //cogemos el nombre
    let nombre = document.querySelector('#nombre').value

    //Comprobamos que se ha escrito un nombre
    if(nombre.length > 0) {
        //Guardamos el nombre en una variable de sesión
        sessionStorage.setItem("nombreJugador", nombre)

        //Redirigimos a la página de juego
        window.location.href = "./pages/juego.html"
      
    } else {
        //Si no hay un nombre escrito, lo pedimos
        alert("Escribe tu nombre")
    }
}