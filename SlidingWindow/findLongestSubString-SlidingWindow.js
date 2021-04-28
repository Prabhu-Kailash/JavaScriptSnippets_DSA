function findLongestSubstring(string){
    // initialize distinct characters to be found as 0
    // Initialize the character starting position 0
    // Create new Object to store the characters and it's (index + 1) position in the array
    let distinct = 0;
    let start = 0;
    let seen = {};
    // Traverse through input string
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (seen[char]) {
            // compare if start position and character index (length) position in the array return which ever is high
            start = Math.max(start, seen[char])
        }

        distinct = Math.max(distinct, i - start + 1);
        seen[char] = i + 1;
    }

    return distinct;
}

console.log(findLongestSubstring('ritmsgot'))