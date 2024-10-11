function oddiyKalkulyator() {  
 
    const firstNumber = parseFloat(prompt("Birinchi raqamni kiriting:"));  
    
    const secondNumber = parseFloat(prompt("Ikkinchi raqamni kiriting:"));  
     const addition = firstNumber + secondNumber;  

    const subtraction = firstNumber - secondNumber;  

    const multiplication = firstNumber * secondNumber;  
  
    const division = secondNumber !== 0 ? (firstNumber / secondNumber) : "0 ga bo'lish mumkin emas";  
    
    console.log(`Qo'shish: ${addition}`);  
    console.log(`Minus: ${subtraction}`);  
    console.log(`Ko'paytirish: ${multiplication}`);  
    console.log(`${division}`);  
}  

oddiyKalkulyator();