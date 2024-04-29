// Funciones para el juego de defensa de torres

// Función para iniciar el juego
function startGame() {
    window.location.href = "JuegoHtml.html";
    // Lógica para iniciar el juego...
}

// Otras funciones del juego...
// Función para desplazarse suavemente hacia una sección específica
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth' // Desplazamiento suave
        });
    }
}

// Función para manejar el desplazamiento de la rueda del mouse
function handleWheelScroll(event) {
    // Evita el comportamiento predeterminado del desplazamiento de la rueda
    event.preventDefault();

    // Obtiene la dirección del desplazamiento de la rueda
    const delta = Math.sign(event.deltaY);

    // Desplaza la página suavemente hacia arriba o hacia abajo según la dirección de desplazamiento de la rueda
    window.scrollBy({
        top: window.innerHeight * delta,
        left: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
}

// Agrega el evento de desplazamiento de la rueda al documento
document.addEventListener('wheel', handleWheelScroll);




// Función para iniciar el temporizador
function startTimer() {
    let timerElement = document.getElementById('timer'); // Obtiene el elemento del temporizador

    // Función para actualizar el temporizador
    function updateTimer() {
        seconds++; // Incrementa los segundos cada vez que se llama la función
        // Formatea los segundos
        let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
        // Actualiza el contenido del elemento del temporizador
        timerElement.textContent = `Tiempo: 00:${formattedSeconds}`;
    }

    let seconds; // Inicializa los segundos en 0
    updateTimer(); // Actualiza el temporizador inmediatamente

    // Actualiza el temporizador cada segundo
    setInterval(updateTimer, 1000);
}

// Llama a la función para iniciar el temporizador al cargar la página
window.onload = function() {
    startTimer();
};


// Función para actualizar el contador de puntos cada segundo
function updatePointsCounter() {
    // Obtener el elemento del contador de puntos
    let pointsCounter = document.getElementById("points-counter");
    // Inicializar los puntos en 0
    let points = 0;
    // Actualizar el texto del contador de puntos
    pointsCounter.textContent = "Puntos: " + points;

    // Incrementar los puntos en 1 cada segundo
    setInterval(function() {
        // Incrementar los puntos en 1
        points++;
        // Actualizar el texto del contador de puntos
        pointsCounter.textContent = "Puntos: " + points;
    }, 1000); // Actualizar cada segundo (1000 milisegundos)
}

// Llamar a la función para iniciar el contador de puntos
updatePointsCounter();


// Obtén los elementos del contador de puntos y del contador de puntos por segundo
let pointsCounter = document.getElementById("points-counter");
let pointsPerSecondCounter = document.getElementById("points-per-second");

// Función para comprar aumento de puntos por segundo
function buyPointsPerSecond() {
    const cost = 50; // Costo del aumento de puntos por segundo
    let points= pointsCounter.textContent;
    let pointsPerSecond;
    if (points >= cost) {
        // Si el jugador tiene suficientes puntos, realiza la compra
        points -= cost; // Resta el costo de los puntos del jugador
        pointsPerSecond++; // Aumenta la cantidad de puntos por segundo
        updatePoints(); // Actualiza la visualización de los puntos
        updatePointsPerSecond(); // Actualiza la visualización de los puntos por segundo
        // Lógica adicional, si es necesario
    } else {
        // Si el jugador no tiene suficientes puntos, muestra un mensaje de error o realiza otra acción apropiada
        console.log("No tienes suficientes puntos para comprar esta mejora.");
    }
}

// Función para comprar descuento en minions
function buyDiscount() {
    const cost = 40; // Costo del descuento en minions
    if (points >= cost) {
        // Si el jugador tiene suficientes puntos, realiza la compra
        points -= cost; // Resta el costo de los puntos del jugador
        updatePoints(); // Actualiza la visualización de los puntos
        // Lógica para aplicar el descuento en minions
    } else {
        // Si el jugador no tiene suficientes puntos, muestra un mensaje de error o realiza otra acción apropiada
        console.log("No tienes suficientes puntos para comprar esta mejora.");
    }
}

// Función para actualizar la visualización de los puntos en la interfaz
function updatePoints() {
    pointsCounter.textContent = points; // Actualiza el contenido del elemento con la cantidad actual de puntos
}

// Función para actualizar la visualización de los puntos por segundo en la interfaz
function updatePointsPerSecond() {
    pointsPerSecondCounter.textContent = pointsPerSecond; // Actualiza el contenido del elemento con la cantidad actual de puntos por segundo
}



// Función para comprar la tercera mejora (pendiente)
function buyThirdImprovement() {
    // Lógica para comprar la tercera mejora (pendiente)
}

// Función para abrir los ajustes
function openSettings() {
    // Lógica para abrir los ajustes
    let settingsDialog = document.getElementById("settings-dialog");
    settingsDialog.classList.toggle("show"); // Alternar la clase "show" para mostrar u ocultar el cuadro de diálogo
}
function closeSettings() {
    let settingsDialog = document.getElementById("settings-dialog");
    settingsDialog.classList.remove("show"); // Remover la clase "show" para ocultar el cuadro de diálogo
}

function openVolumeControl() {
    window.open("Volumen.html", "_blank"); // Abre una nueva pestaña para controlar el volumen
}

function exitToIndex() {
    window.location.href = "index.html"; // Redirige al usuario de vuelta al index.html
}




// Función para crear y mover un minion
// Función para mover un minion
// Función para mover un minion
// Función para mover un minion
function moveMinion(minionImage) {
    // Obtiene el contenedor del juego
    const gameContainer = document.getElementById('game-container');

    // Crea una nueva imagen de minion
    const newMinion = document.createElement("img");
    newMinion.src = minionImage;
    newMinion.classList.add('minion-move');
    gameContainer.appendChild(newMinion);

    // Establece la posición inicial en el centro de la pantalla
    let position = 0;
    newMinion.style.left = position + "%";

    // Mueve el minion hacia la derecha con una animación
    const moveInterval = setInterval(function() {
        // Mueve el minion hacia la derecha
        position += 1;
        newMinion.style.left = position + "%";

        // Verifica si el minion alcanza el final del contenedor del juego
        if (position >= 100) {
            clearInterval(moveInterval); // Detiene la animación
            newMinion.remove(); // Elimina el minion de la pantalla
        }
    }, 100);
}


// Agrega un evento de clic a todos los minions
document.addEventListener("DOMContentLoaded", function() {
    const minions = document.querySelectorAll(".minion");
    minions.forEach(function(minion) {
        minion.addEventListener("click", function() {
            // Obtiene el precio del minion haciendo clic en el atributo de datos
            const cost = parseInt(minion.dataset.price);

            // Verifica si el jugador tiene suficientes puntos para crear un minion
            if (points >= cost) {
                // Resta el costo del minion del total de puntos
                points -= cost;
                // Actualiza la visualización de los puntos
                updatePoints();

                // Llama a la función para mover el minion
                moveMinion(minion);
            } else {
                console.log("No tienes suficientes puntos para invocar este minion.");
            }
        });
    });
});


// Variable global para almacenar los puntos
let points = 0;


// Función para manejar el clic en un minion
function handleMinionClick(event) {
    // Obtiene el precio del minion haciendo clic en el atributo de datos
    const cost = parseInt(event.currentTarget.dataset.price);

    // Verifica si el jugador tiene suficientes puntos para crear un minion
    if (points >= cost) {
        // Resta el costo del minion del total de puntos
        points -= cost;
        // Actualiza la visualización de los puntos
        updatePointsCounter();

        // Crea un nuevo minion en la pantalla
        const newMinion = document.createElement("div");
        newMinion.classList.add("minion");
        newMinion.style.left = "0"; // Inicialmente, el minion se coloca en la posición izquierda del contenedor
        document.getElementById("game-container").appendChild(newMinion);

        // Animación para mover el minion de izquierda a derecha
        let position = 0;
        const intervalId = setInterval(function() {
            // Mueve el minion hacia la derecha
            position += 10;
            newMinion.style.left = position + "px";

            // Verifica si el minion alcanza al enemigo
            if (position >= 100) {
                clearInterval(intervalId); // Detiene la animación
                newMinion.remove(); // Elimina el minion de la pantalla
                // Lógica para actualizar la barra de vida del enemigo...
            }
        }, 100);
    } else {
        console.log("No tienes suficientes puntos para invocar este minion.");
    }
}

// Agrega un evento de clic a todos los minions
document.addEventListener("DOMContentLoaded", function() {
    const minions = document.querySelectorAll(".minion");
    minions.forEach(function(minion) {
        minion.addEventListener("click", handleMinionClick);
    });
});


function createRedBall() {
    const gameContainer = document.getElementById('game-container');

    // Crea la bola roja
    const redBall = document.createElement('div');
    redBall.classList.add('red-ball');
    gameContainer.appendChild(redBall);

    // Obtiene la posición de la bola roja
    let redBallPosition = redBall.getBoundingClientRect();

    // Contador de impactos en el enemigo
    let enemyHits = 0;

    // Mueve la bola roja y verifica colisiones
    const moveInterval = setInterval(function() {
        redBallPosition = redBall.getBoundingClientRect();

        // Verifica si la bola roja toca la imagen del minion
        const minions = document.querySelectorAll('.minion-move');
        minions.forEach(minion => {
            const minionPosition = minion.getBoundingClientRect();
            if (
                redBallPosition.left < minionPosition.right &&
                redBallPosition.right > minionPosition.left &&
                redBallPosition.top < minionPosition.bottom &&
                redBallPosition.bottom > minionPosition.top
            ) {
                // Elimina tanto la bola roja como el minion
                redBall.remove();
                minion.remove();
            }
        });

        // Verifica si la bola roja llega al final
        if (redBallPosition.left >= gameContainer.offsetWidth) {
            endGame(false); // El jugador pierde
        }

        // Mueve la bola roja hacia la derecha
        redBall.style.left = (redBallPosition.left + 1) + 'px';
    }, 10); // Cambiado el intervalo a 10 milisegundos para suavizar el movimiento
}

// Lanza una bola roja cada segundo
setInterval(createRedBall, 1000);

// Función para finalizar el juego
function endGame(playerWins) {
    // Detiene la creación de nuevas bolas rojas
    clearInterval(createRedBallInterval);

    // Muestra el mensaje de resultado
    const message = document.createElement('div');
    message.textContent = playerWins ? '¡Ganaste!' : '¡Perdiste!';
    message.style.color = playerWins ? 'green' : 'red';
    message.style.fontSize = '24px';
    document.body.appendChild(message);

    // Limpia el contenedor del juego
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '';

    // Detiene cualquier otro intervalo en ejecución
    clearInterval(moveMinionInterval);
}



// Array de mensajes de onboarding
const onboardingMessages = [
    "¡Bienvenido al juego!",
    "Tu objetivo es proteger al héroe haciendo clic en los minions que aparecen.",
    "Haz clic en 'Ajustes' para configurar opciones como el volumen.",
    // Agrega más mensajes de onboarding según sea necesario
];

let currentMessageIndex = 0; // Índice del mensaje actual

// Función para mostrar el siguiente mensaje de onboarding
function showNextOnboarding() {
    if (currentMessageIndex < onboardingMessages.length) {
        // Obtiene el cuadro de texto de onboarding
        const onboardingText = document.getElementById('onboarding-text');
        // Muestra el siguiente mensaje de onboarding
        onboardingText.textContent = onboardingMessages[currentMessageIndex];
        currentMessageIndex++; // Incrementa el índice del mensaje actual
    } else {
        // Si no hay más mensajes, oculta el contenedor de onboarding
        const onboardingContainer = document.getElementById('onboarding-container');
        onboardingContainer.classList.add('hidden');
        // Detiene el onboarding
        return;
    }
}

// Función para iniciar el onboarding
function startOnboarding() {
    // Muestra el contenedor de onboarding
    const onboardingContainer = document.getElementById('onboarding-container');
    onboardingContainer.classList.remove('hidden');
    // Muestra el primer mensaje de onboarding
    showNextOnboarding();

    // Escucha el clic en el botón de siguiente
    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', showNextOnboarding);
}

// Llama a la función para iniciar el onboarding al cargar la página
window.onload = startOnboarding;
