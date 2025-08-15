let n = 0;
const number = document.getElementById('number');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

function updateNumber(value){
    n += value;
    number.querySelectorAll('.fadeOutDown, .fadeOutUp').forEach(el => el.remove());
    number.querySelectorAll('span').forEach(span => span.className = '');

    if(value > 1){
        number.querySelectorAll('span').forEach(span => span.classList.add('fadeOutUp'));
        number.insertAdjacentHTML('beforeend', '<span class="fadeInUp">' + n + '</span>');
    } else{
        number.querySelectorAll('span').forEach(span => span.classList.add('fadeOutDown'));
        number.insertAdjacentHTML('beforeend', '<span class="fadeInDown">' + n + '</span>');
    }
}

minus.addEventListener('click', function(){
    updateNumber(-1);
});

plus.addEventListener('click', function(){
    updateNumber(1);
});