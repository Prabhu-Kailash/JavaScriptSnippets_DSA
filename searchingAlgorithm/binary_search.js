function binarySearch(arr, val){
  // Input sorted array and value to find in the array
  // If value is found in the array return the index of it, if not return -1
  let start = 0;
  let end = arr.length - 1;
  let avg = Math.floor((end + start) / 2);
  while (start <= end) {
      if(arr[avg] == val) {
          return avg;
      } else if (arr[avg] > val) {
          end = avg - 1;
      } else if (arr[avg] < val) {
          start = avg + 1;
      }
      avg = Math.floor((end + start) / 2);
  }
  return -1;
}


console.log(binarySearch([5,6, 13, 14, 10, 18, 30, 34, 35, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 99))