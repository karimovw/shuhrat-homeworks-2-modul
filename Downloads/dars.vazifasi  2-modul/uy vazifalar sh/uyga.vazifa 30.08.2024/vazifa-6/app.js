var weight2 = parseFloat(prompt("To'g'ri to'rtburchakning enini kiriting (son):"));  
var height2 = parseFloat(prompt("To'g'ri to'rtburchakning uzunligini kiriting (son):"));  
 
if (isNaN(weight2) || isNaN(height2) || weight2 <= 0 || height2 <= 0) {  
    console.log("Iltimos, musbat sonlarni kiriting.");  
} else {  
    var surface = height2 * weight2;  
    console.log(`To'g'ri to'rtburchakning yuzasi: ${surface}`);  

    var perimetr = 2 * (height2 + weight2);  
    console.log(`To'g'ri to'rtburchakning perimetri: ${perimetr}`);  
}