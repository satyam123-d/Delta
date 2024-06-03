str = prompt("Enter a text")

if((str.startsWith('A')|| str.startsWith('a')) && str.length > 5){
    alert("Golden String")
}

else{
    alert("Not Golden String");
}