let count = 0;

const decEl = document.getElementById("dec");
const resEl = document.getElementById("res");
const incEl = document.getElementById("inc");
const counterEl = document.getElementById("counter");

decEl.addEventListener("click", function () {
  count--;
  counterEl.innerText = count;
  if (count > 0) {
    counterEl.style.color = "green";
  } else if (count < 0) {
    counterEl.style.color = "red";
  } else {
    counterEl.style.color = "black";
  }
});

resEl.addEventListener("click", function () {
  count = 0;
  counterEl.innerText = count;
  if (count > 0) {
    counterEl.style.color = "green";
  } else if (count < 0) {
    counterEl.style.color = "red";
  } else {
    counterEl.style.color = "black";
  }
});

incEl.addEventListener("click", function () {
  count++;
  counterEl.innerText = count;
  if (count > 0) {
    counterEl.style.color = "green";
  } else if (count < 0) {
    counterEl.style.color = "red";
  } else {
    counterEl.style.color = "black";
  }
});
