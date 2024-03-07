const lightbulb1= document.getElementById('lightbulb1');
const lightbulb2= document.getElementById('lightbulb2');
const lightbulb3= document.getElementById('lightbulb3');
const subtitle= document.querySelector('.subtitle');

let count = 0;

function updateSubtitle() {
    subtitle.textContent = `You have clicked ${count} times`;
}

function handleClick(lightbulb) {
    lightbulb.classList.toggle('active');
    count++;
    updateSubtitle();
}

lightbulb1.addEventListener('click', () => handleClick(lightbulb1));
lightbulb2.addEventListener('click', () => handleClick(lightbulb2));
lightbulb3.addEventListener('click', () => handleClick(lightbulb3));
