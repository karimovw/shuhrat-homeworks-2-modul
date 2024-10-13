function getLargerNumber() {  
    var num1 = parseFloat(prompt("son kitining:")); 
    var num2 = parseFloat(prompt("son kitining:")); 
    
    if (num1 > num2) {  
        return num1;  
    } else {  
        return num2;  
    }  
}  

console.log(getLargerNumber());