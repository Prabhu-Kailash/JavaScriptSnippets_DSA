function selection_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minimum = arr[i];
        let index_min = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(minimum > arr[j]) minimum = arr[j], index_min = j;
        }
        if(i != index_min) swap(arr, i, index_min);
    }
    return arr;
}

function swap(arr, index_1, index_2) {
    let temp = arr[index_1];
    arr[index_1] = arr[index_2];
    arr[index_2] = temp;
    return arr;
}

console.log(selection_sort([14, 10, 11, 5, 25, 1, 2, 3]));