function averagePair(sortedArr, target_avg) {
  // Given Input Array and Target Average
  // Create multiple pointers to traverse through sorted array
  let left = 0;
  let right = sortedArr.length - 1;
  while (left < right) {
      let avg = (sortedArr[left] + sortedArr[right])/2;
      if (avg < target_avg) {
          left++;
      } else if (avg > target_avg) {
          right--;
      } else if (avg === target_avg) {
          return true;
      }
  }
  return false;
}
