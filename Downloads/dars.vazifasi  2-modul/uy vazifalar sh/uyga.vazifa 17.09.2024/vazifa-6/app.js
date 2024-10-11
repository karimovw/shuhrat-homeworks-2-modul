const numbers = [3, 5, 7, 2, 4]; 

const sum = numbers.reduce((acc, num) => acc + num, 0);  
const average = sum / numbers.length;  

console.log("Average:", average);