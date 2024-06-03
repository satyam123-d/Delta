document.addEventListener("DOMContentLoaded", function () {
  let h1 = document.querySelector("h1");
  let h3 = document.querySelector("h3");
  let p = document.querySelector("p");
  let btn = document.querySelector("button");
  let input = document.querySelector("input");

  btn.addEventListener("click", function () {
    console.log("Button Clicked!");
  });

  btn.addEventListener("click", function(){
    console.dir(this.innerHTML);
    this.style.backgroundColor = "blue";
  })

  input.addEventListener("keydown", function(event){
    console.log("key was pressed");
    console.log(event);
    console.log(event.code);
    console.log(event.key)
    if(event.code == "ArrowUp"){
        console.log("Character move upward");
    }
    else if(event.code == "ArrowDown"){
        console.log("Character move downward");
    }
    if(event.code == "ArrowLeft"){
        console.log("Character move Left Side");
    }
    if(event.code == "ArrowRight"){
        console.log("Character move Right Side");
    }
  })

  let form = document.querySelector("form");
  form.addEventListener("submit", function(event){
    event.preventDefault();

    let inp = form.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
    console.log(this.elements[0].value);
    console.log(form.elements[1].value);
  })
  
  let user = form.querySelector("input");
  user.addEventListener("change",function(){
    console.log("change event");
    console.log("final value = ", this.value);
  })

  user.addEventListener("input", function(){
    console.log("input event");
    console.log("final value = ", this.value);
  })
});
