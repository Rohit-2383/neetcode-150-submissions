class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      let encode = '';

      for(const str of strs){
        encode += str.length + '@' + str;
      }
      return encode;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
  let count = 0;
  let arrToReturn = []
 while(count < str.length){
   let innerCount = count;

   while(str[innerCount] !== '@'){
     innerCount++;
   }

   let wordlength = parseInt(str.slice(count,innerCount));
   
   arrToReturn
   .push(str
   .slice(innerCount+1, innerCount+ 1 + wordlength)
   );

   count = innerCount + 1 + wordlength;
 }

  return arrToReturn;
    }
}
