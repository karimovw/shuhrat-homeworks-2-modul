function getSmallestNumber(arr) {  
    var smallest = arr[0];  
    for (var i = 1; i < arr.length; i++) {  
        if (arr[i] < smallest) {  
            smallest = arr[i];  
        }  
    }  
    return smallest;  
}  
console.log(getSmallestNumber([2, 4, 5, 30, 54, 56, 23, 100, 0, 3, 6]));