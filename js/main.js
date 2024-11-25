document.getElementById("downloadBtn").addEventListener("click", function () {
  this.textContent = "Done";
  this.classList.add("done");
  this.disabled = true; // Disable the button to prevent further clicks
});
