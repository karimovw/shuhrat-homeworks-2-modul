const arr1 = [1, 2, 3, 4, 5, 7]; 
const arr2 = [2, 3, 4, 7, 4, 5]; 

const difference = arr1.filter(num => !arr2.includes(num));  

console.log("Difference:", difference);