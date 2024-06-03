let toddo = [];

let req = prompt("Enter your request");

while(true){
    if(req == "quit"){
        console.log("quiting app");
        break;
    }

    if(req == "list"){
        console.log("____________________");
        for(let i=0; i<toddo.length; i++){
            console.log(i, toddo[i]);
        }
        console.log("______________________");
    }

    else if(req == "add"){
        let task = prompt("Please enter the task you want to add");
        toddo.push(task);
    }

    else if(req == "delete"){
        let idx = prompt("Please enter the task no. you want to delete");
        toddo.splice(idx, 1);
        console.log("task deleted");
    }

    req = prompt("Please enter your request");
}