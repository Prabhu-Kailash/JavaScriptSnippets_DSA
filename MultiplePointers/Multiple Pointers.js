// Frequency Counter Method
function areThereDuplicates(...args) {
  // Get inputs from variable number of arguments
  let input_array = args;
  // Convert them into string (Since any characters can be passed into args)
  let input_arrayString = input_array.filter(ele => ele.toString())
  // Use frequency counter method to find to see if there are any duplicates
  let input_frequency = {};
  for (let val of input_arrayString) {
    // Return true if there are any duplicates, return false if none
    input_frequency[val] = (input_frequency[val] || 0) + 1;
    if (input_frequency[val] > 1) {
        return true
    }
  }
  return false
}

// Multiple Pointer Method
function isThereDuplicates(...args) {
  // Get inputs from variable number of arguments
  // Sort the array to be ascending to have pointers move from left to right
  let input_array = args.sort();
  // Use Multiple Pointers method to find to see if there are any duplicates
  let left = 0;
  let left_plus1 = 1
  // Return true if there are any duplicates, return false if none
  while (left_plus1 < input_array.length) {
      if (input_array[left] !== input_array[left_plus1]) {
          left_plus1++;
          left++;
      } else {
          return true
      }
  }

  return false
  
}

// Linear solution 
function isDuplicate(...args) {
    return new Set(args).size !== args.length
}