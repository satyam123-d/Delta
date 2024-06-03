function getValue(){
    let num = document.getElementById("myInput");

    let value = num.value;

    for(i=1; i<=10; i++){
        const node = document.createElement("li");
        const textnode = document.createTextNode(value+" X "+i+" = "+value*i);
        node.appendChild(textnode);
        document.getElementById("table").appendChild(node);
    }
}