// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). 
// You must also not convert the inputs to integers directly.

 /**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var addStrings = function(num1, num2) {
    // turn both num1 and numt into an array of digits
    const num1Arr = num1.split('');
    const num2Arr = num2.split('');
    let carry = 0, sum = 0;
    const result = new Array(Math.max(num1Arr.length, num2Arr.length) + 1);
    let i = num1.length - 1, j = num2.length - 1, k = result.length - 1;
    while (i >= 0 || j >= 0) {
        sum = (i >= 0 ? num1Arr[i] - '0' : 0) + (j >= 0 ? num2Arr[j] - '0' : 0) + carry;
        carry = sum > 9 ? 1 : 0;
        result[k] = sum % 10;
        i--;
        j--;
        k--;
    }
    if (carry) {
        result[0] = carry;
    }
    return result.join('');
};

console.log(addStrings('123', '456'));

// Example 1:
// Input: num1 = "11", num2 = "123"
// Output: "134"

// Example 2:
// Input: num1 = "456", num2 = "77"
// Output: "533"

// Example 3:
// Input: num1 = "0", num2 = "0"
// Output: "0"