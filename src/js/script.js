const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const simpleColor = document.querySelector(".simple-color");

// Simple color generator
btn.addEventListener("click", () => {
  const a = [1, 1, 1];
  const colorRandom = a.map((el) => {
    return el * Math.floor(Math.random() * 255);
  });

  document.body.style.backgroundColor = `rgba(${colorRandom})`;
  color.textContent = `rgba(${colorRandom})`;
});

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }
