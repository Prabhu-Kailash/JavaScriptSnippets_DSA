function collectStrings(obj1) {
    let list = [];
    for(let [k, v] of Object.entries(obj1)){
        if(typeof(v) == 'object') {
            list = list.concat(collectStrings(v));
        } else if (typeof(v) == 'string') {
            list.push(v.toString());
        }
    }

    return list;
}

let obj1 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj1))