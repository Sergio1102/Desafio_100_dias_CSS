let active = 0;
const buttons = document.querySelectorAll('.button');
const cards = document.querySelectorAll('.card');

function ativarCard(){
    const cardAtual = cards[active];
    cardAtual.classList.remove('active');
    cardAtual.classList.add('inactive');
    active++;
    if(active >= 3){
        active = 0;
    }
    const proximoCard = cards[active];
    proximoCard.classList.remove('inactive');
    proximoCard.classList.add('active');
}

buttons.forEach(button => {
    button.addEventListener('click', ativarCard);
});