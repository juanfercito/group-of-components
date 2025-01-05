const card = document.getElementById('poster');

// Dimensiones del contenedor
const height = card.clientHeight;
const width = card.clientWidth;

card.addEventListener('mousemove', (evt) => {
    const x = evt.offsetX; // Coordenadas relativas al elemento
    const y = evt.offsetY;

    // Rotación basada en posición del mouse
    const yRotation = ((x / width) / 2) * 20;
    const xRotation = ((y / height) / 2) * 20;

    card.style.transform = `
        perspective(1000px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
    `;
});

// Reset al salir del área
card.addEventListener('mouseout', () => {
    card.style.transform = `
        perspective(1000px)
        scale(1.1)
        rotateX(0deg)
        rotateY(0deg)
    `;
});
