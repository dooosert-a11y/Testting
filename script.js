function check() {
  const value = document.getElementById("answer").value;
  const error = document.getElementById("error");

  if (value === "56") {
    document.getElementById("gate").style.display = "none";
    document.getElementById("content").hidden = false;
  } else {
    error.textContent = "Wrong. Try again.";
  }
}
