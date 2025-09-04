var path = document.querySelector(".hero-path path");
var length = path.getTotalLength();
console.log(length);

path.style.strokeDasharray = length / 2;
path.style.strokeDashoffset = length;
