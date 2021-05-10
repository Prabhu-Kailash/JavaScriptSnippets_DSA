function stringSearch(input_string, search_string) {
    let matches_found = 0;
    for (let i = 0; i < input_string.length; i++) {
        for (let j = 0; j < search_string.length; j++){
            if(search_string[j] !== input_string[i]) break;
            else if (search_string[j] == input_string[i]) {
                i++;
                if(j == (search_string.length - 1)) matches_found++;
            }
        }
    }
    return matches_found
}

console.log(stringSearch("wowomgzomg", "omga"))