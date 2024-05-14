const preguntas = [
    {
        pregunta: "¿Quién fue el campeón del mundo de MotoGP en la temporada 2021?",
        opciones: ["Marc Márquez", "Valentino Rossi", "Fabio Quartararo", "Joan Mir"],
        respuesta: 2 // Índice de la respuesta correcta en el array de opciones
    },
    {
        pregunta: "¿Qué equipo ganó el campeonato de constructores en la temporada 2023 de MotoGP?",
        opciones: ["Honda", "Ducati", "Yamaha", "Aprilia"],
        respuesta: 1
    },
    {
        pregunta: "¿Cuál es el circuito más largo del calendario de MotoGP?",
        opciones: ["Circuito de Sepang", "Circuito de Mugello", "Circuito de las Américas", "Circuito de Silverstone"],
        respuesta: 0
    },
    {
        pregunta: "¿En qué circuito se celebra el Gran Premio de Catalunya en MotoGP?",
        opciones: ["Jerez", "Losail", "Montmeló", "Cheste"],
        respuesta: 2
    },
    {
        pregunta: "¿Quién es el piloto más joven en ganar un Gran Premio de MotoGP?",
        opciones: ["Jorge Martin", "Pedro Acosta", "Valentino Rossi", "Marc Marquez"],
        respuesta: 3
    }
];

let puntaje = 0;
let preguntaActual = 0;

function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    const preguntaElement = document.getElementById("pregunta");
    preguntaElement.textContent = pregunta.pregunta;

    const opcionesElement = document.getElementById("opciones");
    opcionesElement.innerHTML = "";

    pregunta.opciones.forEach((opcion, index) => {
        const opcionButton = document.createElement("button");
        opcionButton.textContent = opcion;
        opcionButton.addEventListener("click", () => verificarRespuesta(index));
        opcionesElement.appendChild(opcionButton);
    });
}

function verificarRespuesta(respuesta) {
    const pregunta = preguntas[preguntaActual];
    if (respuesta === pregunta.respuesta) {
        puntaje++;
    }
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    alert(`¡Juego terminado!\nPuntaje: ${puntaje}/${preguntas.length}`);
    reiniciarJuego();
}

function reiniciarJuego() {
    puntaje = 0;
    preguntaActual = 0;
    mostrarPregunta();
}

// Llamar a la función para iniciar el juego
mostrarPregunta();