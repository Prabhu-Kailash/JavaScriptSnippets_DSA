function bubble_sort(arr) {
    let no_swap;
    for (let i = arr.length - 1; i >= 0; i--) {
        no_swap = true;
        for(let j = 0; j < i; j++) {
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j + 1]) swap(arr, j, (j+1)), no_swap = false;
        }
        if(no_swap) break;
    }
    return arr
}

function swap(arr, index_1, index_2) {
    let temp = arr[index_1];
    arr[index_1] = arr[index_2];
    arr[index_2] = temp;
}

console.log(bubble_sort([14, 1, 2, 3, 4]))