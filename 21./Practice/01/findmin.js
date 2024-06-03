let nums = [10, 20, 5, 40, 12];

let result = nums.reduce((min, el) => {
    if(min < el){
        return min;
    }
    else{
        return el;
    }
})

console.log(result);