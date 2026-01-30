function check() {
  const value = document.getElementById("answer").value;
  const error = document.getElementById("error");

  if (value === "21") {
    document.getElementById("gate").style.display = "none";
    document.getElementById("content").hidden = false;
  } else {
    error.textContent = "Wrong. Try again.";
  }
}

// 6-image cube
const images = [
  "https://i.ibb.co/Zz1fRztQ/image.jpg",
  "https://i.ibb.co/J0x9WM1/image.jpg",
  "https://i.ibb.co/TDwzHfNy/image.jpg",
  "https://i.ibb.co/1Ynd7nyt/image.jpg",
  "https://i.ibb.co/NnmFcnWR/image.jpg",
  "https://i.ibb.co/2YWM3Srv/OIP-1173889297-o-LTO3-H3-G-VEFZC6y-HNJww-Ha-Ha.jpg"
];

const faces = document.querySelectorAll(".face");

// shuffle images every refresh
images.sort(() => Math.random() - 0.5);

faces.forEach((face, i) => {
  face.style.backgroundImage = `url(${images[i]})`;
});
