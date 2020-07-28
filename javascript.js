//----------current date------------//

let output = document.querySelector('span');

let today = new Date();

let month = today.getMonth() + 1;
let year = today.getFullYear();
let date = today.getDate();

let current_date = `${month}/${date}/${year}`;
output.innerText = current_date;

//----------current date end------------//

//----------current time---------------//
function rendorTime() {

    let time = document.querySelector('p');


    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    if(hours == 24) {
        hours = 0;
    } 
    else if (hours > 12) {
        hours = hours - 0;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let current_time = `${hours}:${minutes}:${seconds}`;

    time.innerText = currentTime;
    

    setTimeout("rendorTime()", 1000);
}

rendorTime();

//----------current time end---------------//
