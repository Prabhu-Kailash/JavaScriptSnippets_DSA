function maxSubarraySum(arr, length_sub){
  // Moving/Slinding Window Method
  // If the array length is shorted than given input length return null
  if(arr.length < length_sub) return null;
  // Create temp variable to store initial temp sum of length of elements
  let temp = 0;
  for (let i = 0; i < length_sub; i++) {
      temp += arr[i];
  }
  let currentTotal = temp;
  let max = temp;
  let towards_right = length_sub;
  // As range increase (from left to right, add next element in array and subract first element of the subarrray)
  for (let i = 0; i < (arr.length - length_sub); i++) {
      currentTotal += arr[towards_right] - arr[i];
      // Compare the previous max, temp we arrived by moving slide/window, store which is max among them.
      max = Math.max(max, currentTotal);
      towards_right++;
  }
  return max;
}