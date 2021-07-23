// Given a sequence of words written in the alien language, and the order of the alphabet, 
// return true if and only if the given words are sorted lexicographicaly in this alien language.

//  * @param {string[]} words
//  * @param {string} order
//  * @return {boolean}

const isAlienSorted = (words, order) => {
    const map = {}
    for (let i = 0; i < order.length; i++) {
        map[order[i]] = i
    };
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i], word2 = words[i + 1];
        let k;
        for (k = 0; k < word1.length && k < word2.length; k++) {
            if (map[word1[k]] < map[word2[k]]) {
                break;
            } else if (map[word1[k]] > map[word2[k]]) {
                return false;
            }
        }
        if (k === word2.length && k < word1.length) {
            return false;
        }
    }
    return true;
};


console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
// expected output: true
console.log(isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"));
// expected output: false
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"));
// expected output: false