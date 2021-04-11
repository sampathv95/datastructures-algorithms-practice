function factorial(num){
    if (num === 1 || num === 0) return 1;
    return num * factorial(num-1);
}

function power(base, exp){
    if (exp === 0) return 1;
    if (exp === 1) return base;
    return base * power(base, exp-1);
}

function productOfArray(arr){
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(num){
    if (num === 0) return 0;
    return num + recursiveRange(num-1);
}

function fib(num){
    if (num ===0 || num === 1) return 1;
    let left = 1;
    let right = 1;
    let sum = 0;
    function pushFib(left, right, num){
        if (num === 0) return;
        sum = left + right;
        left = right;
        right = sum;
        return pushFib(left, right, num-1)
    }
    pushFib(left, right, num-2)
    return sum;
}

function reverse(str){
    if (str.length === 0) return null;
    let i = str.length-1;
    let revStr = '';
    function rev(str, i){
        if (i < 0) return;
        revStr = revStr.concat(str[i])
        return rev(str, i-1)
    }
    rev(str, i)
    return revStr;
}

function isPalindrome(str){
    if(str.length <= 1) return true;
    return str[0] === str[str.length-1] && isPalindrome(str.slice(1, str.length-1))
}

function someRecursive(arr, fn){
    if (arr.length === 0) return false;
    return fn(arr[0]) || someRecursive(arr.slice(1), fn);
}

function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }

function capitalizeFirst(arr){
    if (arr.length === 0) return;
    let capitalArr = [];
    function doCapitalize(arr){
        if (arr.length === 0) return;
        capitalArr.push(arr[0].charAt(0).toUpperCase()+arr[0].slice(1));
        return doCapitalize(arr.slice(1));
    }
    doCapitalize(arr);
    return capitalArr;
}

function capitalizeWords(arr){
    if (arr.length === 0) return;
    let capitalArr = [];
    function doCapitalize(arr){
        if (arr.length === 0) return;
        capitalArr.push(arr[0].toUpperCase());
        return doCapitalize(arr.slice(1));
    }
    doCapitalize(arr);
    return capitalArr;
}
console.log('moon'.toLocaleUpperCase());