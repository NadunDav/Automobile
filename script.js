// Main JS CODE

// Time 
function Time() {
    var date = new Date();
    var hour = date.getHours();
    var Min = date.getMinutes();
    var sec = date.getSeconds();
    var period = "AM";
    if (hour == 0) {
        hour = 12;
        period = "AM";
    }

    if (hour == 12) {
        period = "PM";
    }

    if (hour > 12) {
        hour = hour - 12;
        period = "PM";
    }

    if (Min < 10) {
        Min = "0" + Min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    var time = hour + ":" + Min + ":" + sec + "-" + period;
    document.getElementById("display").innerHTML = time;
    setTimeout(Time, 1000)
}
Time();

// Making a slider using JS

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('ul');

hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle('slide');
});


// Changing the Theme

const redBtn = document.querySelector('#red');
const blueBtn = document.querySelector('#blue');
const greenBtn = document.querySelector('#green');

redBtn.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color' ,'#480000');
    document.documentElement.style.setProperty('--second-color' ,'#ce3333');
    document.documentElement.style.setProperty('--third-color' ,'#ffa2a2');
    document.documentElement.style.setProperty('--color-1' ,'#380b0b');
    document.documentElement.style.setProperty('--color-2' ,'#ac2020');
    document.documentElement.style.setProperty('--color-3' ,'#fc0303');
    document.documentElement.style.setProperty('--color-four' ,'#871f1f5e');
    document.documentElement.style.setProperty('--color-5' ,'#fff');
    document.documentElement.style.setProperty('--color-6' ,'#531010');
    document.documentElement.style.setProperty('--color-7' ,'#ff0000');
    document.documentElement.style.setProperty('--color-9' ,'#f74a4a');
    document.documentElement.style.setProperty('--color-10' ,'#b90909');
    document.documentElement.style.setProperty('--color-11','#e61313');
});

blueBtn.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color' ,'#000748');
    document.documentElement.style.setProperty('--second-color' ,'#3336ce');
    document.documentElement.style.setProperty('--third-color' ,'#a2ffff');
    document.documentElement.style.setProperty('--color-1' ,'#0b0b38');
    document.documentElement.style.setProperty('--color-2' ,'#2020ac');
    document.documentElement.style.setProperty('--color-3' ,'#03ebfc');
    document.documentElement.style.setProperty('--color-four' ,'#1f26875e');
    document.documentElement.style.setProperty('--color-5' ,'#fff');
    document.documentElement.style.setProperty('--color-6' ,'#102053');
    document.documentElement.style.setProperty('--color-7' ,'#0000ff');
    document.documentElement.style.setProperty('--color-9' ,'#4aaff7');
    document.documentElement.style.setProperty('--color-10' ,'#0059ff');
    document.documentElement.style.setProperty('--color-11','#138ee6');
});

greenBtn.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color' ,'#004a09');
    document.documentElement.style.setProperty('--second-color' ,'#a6f6ae');
    document.documentElement.style.setProperty('--third-color' , '#48be1a');
    document.documentElement.style.setProperty('--color-1' ,'#14380b');
    document.documentElement.style.setProperty('--color-2' ,'#4cac20');
    document.documentElement.style.setProperty('--color-3' ,'#20fc03');
    document.documentElement.style.setProperty('--color-four' ,'#28871f5e');
    document.documentElement.style.setProperty('--color-5' ,'#fff');
    document.documentElement.style.setProperty('--color-6' ,'#1b5310');
    document.documentElement.style.setProperty('--color-7' ,'#008000');
    document.documentElement.style.setProperty('--color-9' ,'#67f74a');
    document.documentElement.style.setProperty('--color-10','#0fb909');
    document.documentElement.style.setProperty('--color-11','#25e613');
});