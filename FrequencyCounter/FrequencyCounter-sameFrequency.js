function sameFrequency(integer1, integer2) {
  // Find the length of two inputs, If not the same return false
  let integer_1 = integer1.toString()
  let integer_2 = integer2.toString()
  if (integer_1.length !== integer_2.length) {
    return false
  }
  // Create two objects to record the frequency of same digits in the input
  let input_frequency1 = {};
  let input_frequency2 = {};
  // Similar to Anagaram solution
  for (let val of integer_1) {
    input_frequency1[val] = (input_frequency1[val] || 0) + 1;
  }
  for (let val of integer_2) {
    input_frequency2[val] = (input_frequency2[val] || 0) + 1;
  }
  for (let index in integer_1) {
    if (input_frequency1[index] !== input_frequency2[index]) {
      return false
    }
  }
  return true
}

sameFrequency(1284, 8412)