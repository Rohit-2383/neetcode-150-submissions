class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const sorted = (str)=>str.split('').sort().join('')

        if(s.length !==t.length) return false

        if(sorted(t) !==sorted(s)) return false

        return true
         
        


    }
}
