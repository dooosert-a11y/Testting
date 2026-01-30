function check() {
  const value = document.getElementById("answer").value;
  const error = document.getElementById("error");

  if (value === "21") {              // <-- your math answer as string
    document.getElementById("gate").style.display = "none";  // hide gate
    document.getElementById("content").hidden = false;       // show cube
  } else {
    error.textContent = "Wrong. Try again.";
  }
}
