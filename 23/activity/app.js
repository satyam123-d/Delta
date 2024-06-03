document.addEventListener("DOMContentLoaded", function () {

  let text = document.querySelector("input");
  let p = document.querySelector("p");

  text.addEventListener("input", function(event){
    // console.log(text.value);
    p.innerHTML = text.value;
  })
});
