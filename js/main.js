

// Cargamos los datos iniciales del usuario en la pagina juego
const inicioJuego = () => {
    const contDatos = document.querySelector("#datosJugador")

    //Inicializamos los sessionStorage de jugadas, ganados y perdidos

    contDatos.innerHTML = `<p>Nombre: ${sessionStorage.getItem("nombreJugador")}</p> `

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
        inicioJuego()
    } else {
        //Si no hay un nombre escrito, lo pedimos
        alert("Escribe tu nombre")
    }
}