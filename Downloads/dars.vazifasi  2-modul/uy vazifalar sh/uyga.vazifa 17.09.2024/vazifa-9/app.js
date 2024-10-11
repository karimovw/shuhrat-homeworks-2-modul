const products = [  
    { id: 1, name: "Phone", price: 500 },  
    { id: 2, name: "Laptop", price: 1500 },  
    { id: 3, name: "Tablet", price: 300 },  
];  

const expensiveProduct = products.find(product => product.price > 1000);  

console.log(expensiveProduct);