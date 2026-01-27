const hrHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".sec-hand");

function setDate(){
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const secondDegrees = (((seconds/60)*360) + 90);
  if (seconds === 0) {
    secHand.classList.add("no-transition");
  } else {
    secHand.classList.remove("no-transition");
  }
  secHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minsDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hourDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
  hrHand.style.transform = `rotate(${hourDegrees}deg)`;
  
}
setInterval(setDate, 1000);