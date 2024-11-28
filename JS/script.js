// Referencias a los elementos
const btn = document.querySelector('.celebrate-btn');
const body = document.body;
const container = document.querySelector('.container');
const memeImage = document.querySelector('.meme-image');
const audio = document.getElementById('audio');  // Reproductor de audio
const text = document.querySelector('h1'); // Referencia al texto "Ey vos, tengo que decirte algo..."


// Ajusta el volumen de la canción (entre 0 y 1)
audio.volume = 0.6;  // 0.3 es 30% del volumen máximo

// Crear dinámicamente el texto "Soy emo"
const emoText = document.createElement('p');
emoText.textContent = "Soy emo";
emoText.style.display = 'none'; // Inicialmente oculto
emoText.style.fontSize = '1.5rem';
emoText.style.color = '#FF6347';
emoText.style.marginTop = '20px';
container.appendChild(emoText); // Añadir al contenedor

btn.addEventListener('click', () => {
    // Cambiar el fondo a modo oscuro y eliminar la imagen de fondo
    body.classList.add('dark-mode'); // Asegurarse de que el fondo se oscurezca
    container.classList.add('dark-mode');
    
    // Si el texto del botón es "Emo Button"
    if (btn.textContent === 'Emo Button') {
        // Cambiar el texto del botón a "Dejar de ser emo"
        btn.textContent = 'Dejar de ser emo';
        
        // Alternar visibilidad del GIF
        memeImage.style.display = memeImage.style.display === 'none' || memeImage.style.display === '' ? 'block' : 'none';

        // Mostrar el texto "Soy emo"
        emoText.style.display = 'block';

        // Ocultar el texto principal ("Ey vos, tengo que decirte algo...")
        text.style.display = 'none';

        // Reproducir la canción "Dear Maria, Count Me In"
        audio.play(); // Reproduce el audio
    } else {
        // Si el texto del botón es "Dejar de ser emo", redirigir a otra página
        window.location.href = '/no-emo.html'; // Cambia 'otra-pagina.html' por el nombre de la página a la que deseas redirigir
    }
});
