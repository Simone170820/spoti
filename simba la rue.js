// Recupera tutti gli audio e i controlli play/pause
const audioPlayers = document.querySelectorAll('.audio-player');

audioPlayers.forEach(player => {
    const audio = player.querySelector('.audio-file');
    const playPauseButton = player.querySelector('.play-pause');
    const currentTimeElement = player.querySelector('.current-time');
    const durationElement = player.querySelector('.duration');
    const seekBar = player.querySelector('.seek-bar');

    // Imposta la durata del brano quando l'audio è pronto
    audio.addEventListener('loadedmetadata', () => {
        durationElement.textContent = formatTime(audio.duration);
        seekBar.max = audio.duration;
    });

    // Funzione per formattare i tempi in minuti:secondi
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secondsLeft = Math.floor(seconds % 60);
        return `${minutes}:${secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}`;
    }

    // Funzione per aggiornare la posizione della barra di ricerca e il tempo corrente
    function updateCurrentTime() {
        currentTimeElement.textContent = formatTime(audio.currentTime);
        seekBar.value = audio.currentTime;
    }

    // Aggiorna il tempo corrente durante la riproduzione
    audio.addEventListener('timeupdate', updateCurrentTime);

    // Gestisce la riproduzione e la pausa
    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    // Aggiorna la posizione del brano quando si sposta la barra di ricerca
    seekBar.addEventListener('input', () => {
        audio.currentTime = seekBar.value;
    });
});

// Aggiungi un listener per il click sul bottone del menu
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const sidebar = document.querySelector('.sidebar');

// Funzione per attivare/disattivare il menu
function toggleMenu() {
    navList.classList.toggle('active');
    sidebar.classList.toggle('active');
}

// Aggiungi evento click per il menu
menuToggle.addEventListener('click', toggleMenu);

// Gestire swipe per dispositivi mobili
let startX;

sidebar.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

sidebar.addEventListener('touchmove', (e) => {
    let moveX = e.touches[0].clientX;
    if (moveX - startX > 50) {
        sidebar.classList.add('active');
    } else if (startX - moveX > 50) {
        sidebar.classList.remove('active');
    }
});

// Funzione per chiudere il menu quando si fa uno swipe
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe() {
    if (touchStartX > touchEndX) {
        sidebar.classList.remove('active');
    }
}

document.querySelector('.image-container').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.image-container').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});
