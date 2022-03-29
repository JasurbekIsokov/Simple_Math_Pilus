"use script";

const firstNumber = document.querySelector(`.first_number`);
const lastNumber = document.querySelector(`.last_number`);
const answer = document.querySelector(`.answer`);
const check = document.querySelector(`.check`);
const input = document.getElementById("myinput");

firstNumber.textContent = random1();

lastNumber.textContent = random2();

function sum(a, b) {
  return Number(firstNumber.textContent) + Number(lastNumber.textContent);
}

function random1() {
  return Math.floor(Math.random() * 10);
}

function random2() {
  return Math.floor(Math.random() * 20 + 10);
}

check.addEventListener(`click`, (e) => {
  e.preventDefault();
  if (Number(answer.value) === sum()) alert(`Javobingiz to'gri`);
  else if (Number(answer.value !== sum())) alert(`Javobingiz xato`);
});

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
