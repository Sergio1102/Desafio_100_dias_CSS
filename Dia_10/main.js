const displayTime = document.getElementById("display-time");
const displayDate = document.getElementById("display-date");

function showTime(){
    let time = new Date();
    displayTime.innerText = time.toLocaleTimeString("pt-BR", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit"
    });
    setTimeout(showTime, 1000);
}

function getMonth(){
    let today = new Date();
    let dayStringIndex = today.getDay(),
    dayNumIndex = today.getDate(),
    monthIndex = today.getMonth(),
    year = today.getFullYear();
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const dayWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    displayDate.innerText = dayWeek[dayStringIndex] + " " + dayNumIndex + " " + months[monthIndex] + " " + year;
}

getMonth();
showTime();