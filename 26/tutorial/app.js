console.log("Day 26");
// ==============async function===============

// async function greet() {
//   throw "404 page not found";
//   return "hellow";
// }

// greet()
//   .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was : ", result);
//   })
//   .catch((error) => {
//     console.log("Promise was rejected with error : ", error);
//   });

// let demo = async () => {
//     return 5;
// }

//=================await function==============

// function getNum()
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            let num = Math.floor(Math.random() * 10) +1;
//            console.log(num);
//            resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }

// ========Change Color of heading using aync & await===============

h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("promise rejected");
      }
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("color changed");
    }, delay);
  });
}

async function colorChanged() {
  try {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
    changeColor("blue", 1000);
  } catch (error) {
    console.log("error caught");
    console.log(error);
  } finally {
    let a = 5;
    console.log(a);
    console.log(a + 3);
  }
}

colorChanged();
