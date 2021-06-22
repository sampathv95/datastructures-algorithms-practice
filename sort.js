function selectionSort(arr){
    for (let i=0; i<arr.length; i++){
        let minInd = i;
        for (let j=i+1; j<arr.length; j++){
            if (arr[j]<arr[minInd]){
                minInd = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minInd];
        arr[minInd] = temp;
    }
    return arr
}

// watch video again
function insertionSort(arr){
    for (let i=1; i<arr.length; i++){
        curr_val = arr[i];
        for (var j=i-1; j>=0; j--){
            if (arr[j]>curr_val){
                arr[j+1] = arr[j];
            }
            else break;
        }
        arr[j+1] = curr_val;
    }
    return arr;
}

// merge sort
function merge(arr1, arr2){
    let result = [];
    let i = 0;
    let j = 0;
    while(i<arr1.length && j<arr2.length){
        if (arr1[i]<=arr2[j]){
            result.push(arr1[i])
            i++;
        }
        else{
            result.push(arr2[j])
            j++;
        }
    }
    while (i<arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while (j<arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}

function mergeSort(arr){
    if (arr.length<=1) return arr;
    let midIndex = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, midIndex));
    let right = mergeSort(arr.slice(midIndex));
    return merge(left, right)
}

// quick sort
function quickSort(arr, left=0, right=arr.length-1){
    // helper function for pivot
    function pivot(arr, start=0, end=arr.length-1){
        // swap helper function (returns nothing)
        function swap(arr, i, j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            return null
        }
        let pivotEl = arr[start];
        let pivotInd = start;
        for (let i=start+1; i<=end; i++){
            // if pivot element is greater than current
            // element; increment pivot index and swap
            // current element with element art pivot
            // index
            if (pivotEl>arr[i]){
                pivotInd++;
                swap(arr, pivotInd, i);
            }
        }
        swap(arr, start, pivotInd)
        return pivotInd
    }
    if (left<right){
        let pivotInd = pivot(arr, left, right)
        // left recursion
        quickSort(arr, left, pivotInd-1)
        //right recursion
        quickSort(arr, pivotInd+1, right)
    }
    return arr
}

function radixSort(nums){
    // helper function for max digits
    function digitCount(num) {
        if (num === 0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) + 1;
      }
      
      function mostDigits(nums) {
        let maxDigits = 0;
        for (let i = 0; i < nums.length; i++) {
          maxDigits = Math.max(maxDigits, digitCount(nums[i]));
        }
        return maxDigits;
      }
    // helper function to get nth digit
    function getNthDigit(num, n){
        return Math.floor(Math.abs(num)/Math.pow(10, n))%10;
    }
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getNthDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([100,3,2,4,6,9,1,5,3,23]))
