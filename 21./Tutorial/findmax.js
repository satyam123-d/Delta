let nums = [2, 4, 1, 5, 6,2, 7, 8, 9];

let result = nums.reduce((max, el) =>{
    if(max < el){
        return el;
    }
    else{
        return max;
    }
})

console.log(result);