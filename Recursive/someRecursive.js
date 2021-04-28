
function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1), callback);
}

someRecursive([2, 4], function (val) { return val % 2 !== 0 })