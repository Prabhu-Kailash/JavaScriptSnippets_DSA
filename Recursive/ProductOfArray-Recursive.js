function productOfArray(arr) {
    if(arr.length < 1) return 1;
    return arr[0] * productOfArray(arr.splice(1));
}

console.log(productOfArray([2, 2, 3]))