const movieCards = document.querySelectorAll('.movie-card');
const tooltip = document.getElementById('tooltip');

movieCards.forEach(card => {
    const video = card.querySelector('video');
    

    card.addEventListener('mouseenter', () => {
        video.play();
        const title = card.getAttribute('data-title');

        const genre = card.getAttribute('data-genre');
        const cast = card.getAttribute('data-cast');
        tooltip.innerHTML = `
            <h3>${title}</h3>
                <p><strong>Genre:</strong> ${genre}</p>
             <p><strong>Cast:</strong> ${cast}</p>
        `;
        tooltip.style.display = 'block';
    });
    card.addEventListener('mouseleave', () => {
     video.pause();
     video.currentTime = 0; // Reset video
     tooltip.style.display = 'none';
    });

    card.addEventListener('mousemove', (e) => {
     tooltip.style.left = `${e.pageX + 15}px`;
        tooltip.style.top = `${e.pageY + 15}px`;
    });
});
