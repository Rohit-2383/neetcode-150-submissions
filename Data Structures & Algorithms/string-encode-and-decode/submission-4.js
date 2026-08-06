class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
         let encoded = ''
        for(const str of strs){
         encoded += str.length + '#' + str;
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        
      let count = 0
      let arrToReturn = []

        while(count<str.length){
            let innerCount = count

             while(str[innerCount]!=='#'){
                    innerCount++
             }


            let wordLength = parseInt(str.slice(count,innerCount))
             arrToReturn.push(str.slice(innerCount + 1, innerCount + 1 + wordLength));
        count = innerCount + 1 + wordLength;
        }

        return arrToReturn


    }
}
