const numbers = [2,3,5,7,8];
const output = [];

for(let i = 0; i < numbers.length; i++){
    const elements = numbers[i];
    const result = elements * elements;
    output.push(result);
}
console.log(output);

// ES6

const outputs = numbers.map(function(elements){
    return elements * elements;
    
})
console.log(outputs);


const resultt = numbers.map(x => x * x);
console.log(resultt);

const filterNumber = numbers.filter(x => x > 5);
console.log(filterNumber);

const findNumber = numbers.find(x => x > 5);
console.log(findNumber);


