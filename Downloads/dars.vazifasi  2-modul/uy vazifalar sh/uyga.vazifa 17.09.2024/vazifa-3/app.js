const numbers = [1, 2, 3, 4, 5, 6]; 

const evenSum = numbers.reduce((sum, num) => {  
    return num % 2 === 0 ? sum + num : sum;  
}, 0);  

console.log("Sum of even numbers:", evenSum);