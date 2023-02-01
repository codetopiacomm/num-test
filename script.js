const button = document.querySelector(".btn");
const field = document.querySelector(".field");
const number = ["one", "two", "three", "four"];

button.addEventListener("click", function () {
  field.textContent = number[Math.floor(Math.random() * number.length)];
});
