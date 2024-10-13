function printLongestString(arr) {  
    var longest = "";  
    for (var i = 0; i < arr.length; i++) {  
        if (arr[i].length > longest.length) {  
            longest = arr[i];  
        }  
    }  
    console.log(longest);  
}  
printLongestString(["Jasur", "Muhammad Yusuf", "Abdulla", "Mirzoavaz", "Beksulton"]);