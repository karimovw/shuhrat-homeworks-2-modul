function printShortestString(arr) {  
    var shortest = arr[0];  
    for (var i = 1; i < arr.length; i++) {  
        if (arr[i].length < shortest.length) {  
            shortest = arr[i];  
        }  
    }  
    console.log(shortest);  
}  
printShortestString(["Jasur", "Muhammad Yusuf", "Abdulla", "Mirzoavaz", "Beksulton"]);