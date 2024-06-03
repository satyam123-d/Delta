let para1 = document.createElement("p");
para1.innerText = "Hey I'm red";
document.querySelector("body").append(para1);

para1.classList.add("red");

let head3 = document.createElement("h3");
head3.innerText = "I'm a blue h3";
document.querySelector("body").append(head3);

head3.classList.add("blue");

let block = document.createElement("div");
document.querySelector("body").append(block);
block.classList.add("block");

let head1 = document.createElement("h1");
head1.innerText = "I'm in a div";
let para2 = document.createElement("p");
para2.innerText = "ME TOO!";
document.querySelector(".block").append(head1);
document.querySelector(".block").append(para2);

