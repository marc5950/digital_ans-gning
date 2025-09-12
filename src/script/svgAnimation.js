// JS til SVG animation
var path = document.querySelector(".hero-path path");
var length = path.getTotalLength();
console.log(length);

path.style.strokeDasharray = length / 2;
path.style.strokeDashoffset = length;

const element = document.querySelector(".hero-path");

function checkSize() {
  const height = window.innerHeight;
  const width = window.innerWidth;

  if (height < 700 || width < 700) {
    element.classList.add("hidden");
  } else {
    element.classList.remove("hidden");
  }
}

// Kør ved load
checkSize();

// Kør igen når vinduet ændrer størrelse
window.addEventListener("resize", checkSize);
