function insertion_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentVal = arr[i];
        for(var j = i - 1; j >= 0 && currentVal < arr[j]; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}


console.log(insertion_sort([25, 1, 2, 3]))