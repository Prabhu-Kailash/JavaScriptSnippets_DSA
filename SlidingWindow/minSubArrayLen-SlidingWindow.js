function minSubArrayLen(arr, integer) {
    // Get the input array and integer from the array
    // let initial start and end position in array is 0
    let start = 0;
    let end = 0;
    let minLen = Infinity;
    let total = 0;
    // Traverse through the array to find sum of continuous sub array greater than given input integer
    while (start < arr.length) {
        if(total < integer && end < arr.length) {
            total += arr[end];
            end++;
            console.log(end, start)
        } else if (total >= integer) {
            console.log(end, start)
            // if sum is greater or equal to the input integer return the length of sub array
            minLen = Math.min(minLen, end-start);
            total -= arr[start]
            start++;
        } else {
            break;
        }
    }
    // else return 0
    return minLen == Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 1, 6, 5, 4], 9))