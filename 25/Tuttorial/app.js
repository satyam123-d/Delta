//================= breakpoint and call stack=========

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     return ans;
// }

// console.log(three());

// =============Callback Hell===============

// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });

// ==================Problem with callback Hell ====================

// function saveDb(data, success, failure) {
//   let interSpeed = Math.floor(Math.random() * 10) + 1;
//   if (interSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// saveDb(
//   "apna College",
//   () => {
//     console.log("Success : your data was saved");
//     saveDb(
//       "Hello World!",
//       () => {
//         console.log("Success 2 : Data was saved!");
//         saveDb(
//           "Satyam",
//           () => {
//             console.log("Success 3 : Data was saved!");
//           },
//           () => {
//             console.log("Failure 3 : your data was not saved.");
//           }
//         );
//       },
//       () => {
//         console.log("Failure 2 : your data was not saved.");
//       }
//     );
//   },
//   () => {
//     console.log("Failure 2 : your data was not saved.");
//   }
// );

// ===============Promises================

// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("Success! : Data was saved!");
//     } else {
//       reject("Failure! : data was not saved!");
//     }
//   });
// }

// savetoDb("apna College")
//   .then(() => {
//     console.log("promise was resolved");
//   })
//   .catch(() => {
//     console.log("promise was rejected!");
//   });

//=============== Promise Chaining ================

// savetoDb("apna College")
//   .then((result) => {
//     console.log("data 1 : promise was resolved");
//     console.log(result);
//     return savetoDb("apna College");
//   })
//   .then((result) => {
//     console.log("data 2 : promise was resolved");
//     console.log(result);
//     return savetoDb("Satyam");
//   })
//   .then((result) => {
//     console.log("data 3 : promise was resolved");
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("promise was rejected!");
//     console.log(error);
//   });

// ========Change Color of heding using promise ===============

h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    return changeColor("green", 1000);
  })
  .then(() => {
    return changeColor("orange", 1000);
  })
  .then(() => {
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("completed!");
  })
  .catch(() => {
    console.log("Not Completed");
  });
