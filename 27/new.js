const url = "https://catfact.ninja/fact";
const url2 = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector(".cat");;
let btn2 = document.querySelector(".dog");

btn.addEventListener("click", async () => { // Corrected "click" event
    let fact = await getFact(); // Corrected function name
    let p = document.querySelector("#result");
    p.innerText = fact;
});

btn2 = addEventListener("click", async() => 
{ 
    let image = await getImages();
    let img = document.querySelector(".output");
    img.setAttribute("src", image);
})


async function getFact() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (error) {
        return "No Facts Found";
    }
}

async function getImages() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (error) {
        return "No Image Found";
    }
}
// getFact();

getImages();

// const getFact = () => {
//     axios.get(url)
//   .then((res) => {
//     return res.data; // Accessing response data
//   })
//   .then((data) => {
//     console.log("data1 =", data.fact);
//     return axios.get(url);
//   })
//   .then((res) => {
//     return res.data; // Accessing response data
//   })
//   .then((data) => {
//     console.log("data2 =", data.fact);
//     return axios.get(url);
//   })
//   .catch((err) => {
//     console.log("ERROR -", err);
//   });
// }

// getFact();


// ======Pass Header with axios=============

const url3 = "https://icanhazdadjoke.com/"

async function getJokes(){
    try{
        const config = {headers : {Accept: "application/json"}};
        let res = await axios.get(url3,config);
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
}

getJokes();