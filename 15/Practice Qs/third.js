let quater =  prompt("Enter quater to print the month");

let str;

switch(parseInt(quater)){
    case 1:
        str = "January, February, March";
        break;
    case 2:
        str = "April, May, June";
        break;
    case 3:
        str = "July, August, September";
        break;
    case 4:
        str = "Ocotober, November, December";
        break;
    default:
        str = "Wrong Input";
}

console.log(str);