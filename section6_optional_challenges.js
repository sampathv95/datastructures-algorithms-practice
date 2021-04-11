//same frequency
function intToFreq(num){
    let freqObj = {};
    let digit;
    while(num>0){
        digit = num%10;
        freqObj[digit] = freqObj[digit]? freqObj[digit]+1:1;
        num = Math.floor(num/10);
    }
    return freqObj;
}

function sameFrequency(num1, num2){
    let freqCounterNum1 = intToFreq(num1);
    let freqCounterNum2 = intToFreq(num2);
    for (let digit in freqCounterNum1){
        if (Object.keys(freqCounterNum1).length !== Object.keys(freqCounterNum2).length){
            return false;
        }
        if (freqCounterNum1[digit] !== freqCounterNum2[digit]){
            return false;
        }
    }
    return true;
}

//same frequency/multiple pointers
function areThereDuplicates(){
    let argFreqCounter = {};
    for (let key in arguments){
        let arg = arguments[key]
        argFreqCounter[arg] = argFreqCounter[arg]? argFreqCounter[arg]+1:1;
    }
    for (let arg in argFreqCounter){
        if (argFreqCounter[arg]>1){
            return true;
        }
    }
    return false;
}

//multiple pointers
function averagePair(arr, target){
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        let sum = arr[left]+arr[right];
        if (sum === target*2){
            return true
        }
        else if (sum > target*2){
            right -= 1;
        }
        else{
            left += 1;
        }
    }
    return false;
}

//my sol-wrong
function isSubsequence(str1, str2){
    let str1in2Order = [];
    if (str1.length > str2.length){
        return false;
    }
    for (let char of str1){
        if (!str2.indexOf(char)){
            return false;
        }
        str1in2Order.push(str2.indexOf(char));
    }
    for (let i=1; i<str1in2Order.length; i++){
        if (str1in2Order[i-1]>str1in2Order[i]){
            return false
        }
    }
    return true;
}
//course-sol
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }

function maxSubarraySum(arr, n){
    if (arr.length <= n) return null;
    if(n === 0) return null;
    let left = 0;
    let right = n;
    let sum = 0;
    let max_sum = 0;
    while (right <= arr.length){
        sum = arr.slice(left, right).reduce((a, b)=>a+b);
        max_sum = sum > max_sum? sum:max_sum;
        left += 1;
        right +=1;
    }
    return max_sum;
}