 // Gestione delle stelle di valutazione
 const stars = document.querySelectorAll('.star');
 const ratingInput = document.getElementById('rating');

 stars.forEach(star => {
     star.addEventListener('click', function() {
         const ratingValue = this.getAttribute('data-value');
         ratingInput.value = ratingValue;

         // Rimuovi la classe 'selected' da tutte le stelle
         stars.forEach(star => star.classList.remove('selected'));

         // Aggiungi la classe 'selected' fino alla stella selezionata
         for (let i = 0; i < ratingValue; i++) {
             stars[i].classList.add('selected');
         }
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
