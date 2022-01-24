let drower = document.querySelector(".fold-drower");
let foldBtn = document.querySelector(".drower-icon-content-btn");

foldBtn.addEventListener("click", () => {
  drower.classList.toggle("fold");
});