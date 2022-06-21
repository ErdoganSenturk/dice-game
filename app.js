let btn = document.querySelector(".btn");
let text = document.querySelector(".text");
let z1 = document.querySelector(".z1");
let z2 = document.querySelector(".z2");


let list = [
  "./images/one.jpg",
  "./images/two.jpg",
  "./images/three.jpg",
  "./images/four.jpg",
  "./images/five.jpg",
  "./images/six.jpg",
];
 
btn.addEventListener("click", ()=>{

let salla1 = Math.floor(Math.random()*6)+1;
let salla2 = Math.floor(Math.random()*6)+1;
console.log(salla1);
console.log(salla2);

z1.src = list[salla1-1];
z2.src = list[salla2-1];     

if (salla1 == 1 && salla2 == 1) {
  text.innerHTML = "hep yek";
} else if (salla1 == 2 && salla2 == 2) {
  text.innerHTML = "dü bara";
} else if (salla1 == 3 && salla2 == 3) {
  text.innerHTML = "dü se";
} else if (salla1 == 4 && salla2 == 4) {
  text.innerHTML = "dü penç";
} else if (salla1 == 5 && salla2 == 5) {
  text.innerHTML = "dü beş";
} else if (salla1 == 6 && salla2 == 6) {
  text.innerHTML = "dü şeş";
} else if ((salla1 == 1 && salla2 == 2) || (salla1 == 2 && salla2 == 1)) {
  text.innerHTML = "yek-i dü";
} else if ((salla1 == 1 && salla2 == 3) || (salla1 == 3 && salla2 == 1)) {
  text.innerHTML = "se yek";
} else if ((salla1 == 1 && salla2 == 4) || (salla1 == 4 && salla2 == 1)) {
  text.innerHTML = "cehar-ü yek";
} else if ((salla1 == 1 && salla2 == 5) || (salla1 == 5 && salla2 == 1)) {
  text.innerHTML = "penc-ü yek";
} else if ((salla1 == 1 && salla2 == 6) || (salla1 == 6 && salla2 == 1)) {
  text.innerHTML = "şeş-ü yek";
} else if ((salla1 == 2 && salla2 == 3) || (salla1 == 3 && salla2 == 2)) {
  text.innerHTML = "seba -i dü";
} else if ((salla1 == 2 && salla2 == 4) || (salla1 == 4 && salla2 == 2)) {
  text.innerHTML = "cehar-i dü";
} else if ((salla1 == 2 && salla2 == 5) || (salla1 == 5 && salla2 == 2)) {
  text.innerHTML = "penc-i dü";
} else if ((salla1 == 2 && salla2 == 6) || (salla1 == 6 && salla2 == 2)) {
  text.innerHTML = "şeş-i dü";
} else if ((salla1 == 3 && salla2 == 4) || (salla1 == 4 && salla2 == 3)) {
  text.innerHTML = "cehar-ü se";
} else if ((salla1 == 3 && salla2 == 5) || (salla1 == 5 && salla2 == 3)) {
  text.innerHTML = "penc-ü se";
} else if ((salla1 == 3 && salla2 == 6) || (salla1 == 6 && salla2 == 3)) {
  text.innerHTML = "şeş-ü se";
} else if ((salla1 == 4 && salla2 == 5) || (salla1 == 5 && salla2 == 4)) {
  text.innerHTML = "penc cehar";
} else if ((salla1 == 4 && salla2 == 6) || (salla1 == 6 && salla2 == 4)) {
  text.innerHTML = "şeş cehar";
} else if ((salla1 == 5 && salla2 == 6) || (salla1 == 6 && salla2 == 5)) {
  text.innerHTML = "şeş beş";
}
} 
);
      

 

