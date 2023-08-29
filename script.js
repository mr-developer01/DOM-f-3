var counterValue = document.querySelector("#counter-value");
var add = document.querySelector("#add");
var minus = document.querySelector("#minus");

var counter = 0;

add.addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

minus.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    counterValue.textContent = counter;
  }
});
