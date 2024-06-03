import { sum, multiply } from "./math2.js";
import { generate, count } from "random-words";

console.log(generate());
//output: 'army'

console.log(generate(5));
//output: ['army', 'beautiful', 'became', 'if', 'actually']

console.log(generate({ minLength: 2 }));
//output: 'hello'

console.log(generate({ maxLength: 6 }));
//output: 'blue'

console.log(generate({ minLength: 5, maxLength: 5 }));
//output : 'world'

console.log(generate({ minLength: 11, maxLength: 10000 })); //maxLength limited to the longest possible word
//output: 'environment'

console.log(generate({ minLength: 10000, maxLength: 5 })); //minLength limited to the maxLength
//output: 'short'

console.log(sum(2,3));
console.log(multiply(3,4));