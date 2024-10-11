let scores = [];  
for (let i = 1; i <= 3; i++) {  
    let score = parseFloat(prompt(`ball kiriting ${i}:`));  
    scores.push(score);  
}  
let sum = scores.reduce((acc, curr) => acc + curr, 0);  
let average = sum / scores.length;  
let roundedAverage = Math.round(average);  
console.log("O'rtacha ball (okraglangan):", roundedAverage);  