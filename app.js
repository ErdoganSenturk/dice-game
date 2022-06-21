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

let salla1 = Math.floor(Math.random()*6);
let salla2 = Math.floor(Math.random()*6);
console.log(salla1);

z1.src = list[salla1];
z2.src = list[salla2];           

})
      

    