let randomNumberP1 = Math.floor(Math.random()*6+1);
let randomNumberP2 = Math.floor(Math.random()*6+1);

document.querySelector(".img1").setAttribute("src", "Images/dice"+randomNumberP1+".png");
document.querySelector(".img2").setAttribute("src", "Images/dice"+randomNumberP2+".png");