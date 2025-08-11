const searchfield = document.getElementById('searchfield');
const suggestion = document.getElementById('suggestion');

searchfield.addEventListener('keyup', function() {
    const text = this.value;
    if(text.length > 0){
        suggestion.innerHTML = '';
        suggestion.classList.add('active');

        const li1 = document.createElement('li');
        li1.innerHTML = `<b>${text}</b>`;
        suggestion.appendChild(li1);

        const li2 = document.createElement('li');
        li2.innerHTML = `Veritatis et <b>${text}</b>`;
        suggestion.appendChild(li2);

        const li3 = document.createElement('li');
        li3.innerHTML = `ut aliquid ex <b>${text}</b> vero eos`;
		suggestion.appendChild(li3);

    } else{
        suggestion.innerHTML = '';
        suggestion.classList.remove('active');
    }
})