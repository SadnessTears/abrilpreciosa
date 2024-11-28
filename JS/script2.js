// Referencias a los elementos
const playButton = document.querySelector('.play-btn');
const audio = document.getElementById('audio'); // Reproductor de audio
const textContainer = document.querySelector('.text-container'); // Contenedor del texto enmarcado

// Agregar un evento al botón para reproducir la canción
playButton.addEventListener('click', () => {
    // Si el audio no está en reproducción, comenzarlo
    if (audio.paused) {
        audio.play();
        playButton.style.display = 'none';  // Ocultar el botón
        textContainer.style.display = 'block'; // Mostrar el texto enmarcado
    }
});
