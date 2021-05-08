function capitalizeFirst (arr) {
  // add whatever parameters you deem necessary - good luck!
  if(arr.length < 2) return arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
  return [arr[0].charAt(0).toUpperCase() + arr[0].slice(1)].concat(capitalizeFirst(arr.splice(1)))
}


console.log(capitalizeFirst(["car", "toy", "camera"]))