const marker = document.getElementById('marker');
const card = document.getElementById('card');

marker.addEventListener('click', () => {
    card.classList.add('active');
    marker.classList.add('inactive');
})

card.addEventListener('click', () => {
    card.classList.remove('active');
    marker.classList.remove('inactive');
})