const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn2.onclick = function (e) {
  e.stopPropagation();
  modal.style.display = "block";
  btn.classList.add("hide");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  btn.classList.remove("hide");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    btn.classList.remove("hide");
  }
};
