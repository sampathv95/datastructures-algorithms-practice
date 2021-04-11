function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

function naiveStringSearch(long, short){
    var count = 0;
    for (let i=0; i<long.length; i++){
        for (let j=0; j<short.length; j++){
            if (short[j] === long[i+j]){
                count += 1;
            }
        }
    }
    return Math.floor(count/short.length);
}

console.log(naiveStringSearch('pathpath', 'sam'));