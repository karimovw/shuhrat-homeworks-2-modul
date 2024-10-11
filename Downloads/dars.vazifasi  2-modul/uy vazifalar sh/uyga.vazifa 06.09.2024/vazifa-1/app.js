const n = 10; 


for (let i = 1; i <= n; i++) {  
    let row = '';   
    for (let j = 1; j <= n; j++) {  
        row += (i * j).toString().padStart(4, ' ');  
    }  
    console.log(row);
}