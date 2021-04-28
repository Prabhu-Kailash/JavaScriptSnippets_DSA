function countUniqueValues(sortedArr){
  // Create two pointers start at index 0 and 1 of the input Array
  let first_point = 0;
  let second_point = 1;
  // Traverse through the array and compare the two points values if same remove the duplicates, if unique move on.
  while (second_point < sortedArr.length) {
      if (sortedArr[first_point] === sortedArr[second_point]) {
          sortedArr.splice(second_point, 1);
      } else if (sortedArr[first_point] !== sortedArr[second_point]) {
          first_point++;
          second_point++;
      }
  }
  return sortedArr.length;
}

countUniqueValues([1,1,1,1,1,2,2,2,2,2,4,5,6,7,8,9,10,15,23])