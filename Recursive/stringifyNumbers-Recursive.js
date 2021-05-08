function stringifyNumbers(obj) {
    let newObj = {};
    for(let [k, v] of Object.entries(obj)) {
        if(Array.isArray(v)){
            newObj[k] = v.map(ele => typeof(ele) === 'number' ? ele.toString() : ele);
        } else if(typeof(v) === 'object') {
            newObj[k] = stringifyNumbers(v);
        } else if (typeof(v) === 'number') {
            newObj[k] = v.toString();
        } else {
            newObj[k] = v;
        }
    }
    return newObj;
}


let obj = {
    num: 1,
    test: [1, 2, 3, "true"],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj))