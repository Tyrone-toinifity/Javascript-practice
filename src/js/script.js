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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];





// When the user clicks the button, open the modal
btn2.onclick = function (e) {
  e.preventDefault();
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {

  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
