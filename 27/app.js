// let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log("data1 = ", data.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log("data2 = ", data2.fact);
//   })
//   .catch((err) => {
//     console.log("ERROR - ", err);
//   });


//============Code Using Async & Await==========

// async function getFact(url)
// {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);
//   } catch (error) {
//     console.log(error);
//   }

//   console.log("Bye...");
// }

// getFact(url);

