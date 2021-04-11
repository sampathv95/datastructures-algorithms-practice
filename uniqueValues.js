//my sol
function countuniqueValues(arr){
    let uniqueVal = [];
    for (let i=0; i<arr.length; i++){
        if(arr[i]!==arr[i+1]){
            uniqueVal.push(arr[i]);
        }
    }
    return uniqueVal.length;
}

//course sol
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

console.log(countuniqueValues([1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 7, 7, 7, 7, 8, 9]));