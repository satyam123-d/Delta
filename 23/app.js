document.addEventListener("DOMContentLoaded", function() {
  let btn = document.querySelector("button");

  btn.addEventListener("click", function () {
      let h1 = document.querySelector("h1");
      let randomColor = generateColor();
      h1.innerHTML = randomColor;

      let div = document.querySelector("div");
      div.style.backgroundColor = randomColor;
  });

  function generateColor() {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      let color = `rgb(${red}, ${green}, ${blue})`;
      return color;
  }
});
