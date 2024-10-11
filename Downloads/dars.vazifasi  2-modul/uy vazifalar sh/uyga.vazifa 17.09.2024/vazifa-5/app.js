const originalArray = ['salom', 2, true, 'hi', 'hello', 'ok', null, 232];

const stringArray = originalArray.filter(element => typeof element === 'string');  

console.log("New array with string elements:", stringArray);