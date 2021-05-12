function longest_prefix_suffix(string) {
    lps = [];
    pointer1 = 0;
    pointer2 = 1;
    // first element will always have 0 matching prefix/suffix element
    lps[0] = 0
    while (pointer2 < string.length) {
            if (string[pointer2] == string [pointer1]) {
                lps[pointer2] = pointer1 + 1;
                pointer1++;
                pointer2++;
            } else {
                if (pointer1 != 0){
                    pointer1 = lps[pointer1 - 1]
                } else {
                    lps[pointer2] = 0;
                    pointer2++;
                }
            }
    }
    return lps;       
}

// console.log(LPS("abbaaac"))

// a a b a a a c 
//     1   2

function KMPSearch(input_string, search_string) {
    matching_count = 0;
    lps = longest_prefix_suffix(search_string);
    i = 0;
    j = 0;
    while (i < input_string.length) {
        if(input_string[i] == search_string[j]) {
            i++;
            j++;
        } else {
            if (j != 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
        if (j == search_string.length) {
            matching_count++;
            j = lps[j - 1];
        }
    }
    return matching_count;
}

console.log(KMPSearch("onionionspl", "onions"))