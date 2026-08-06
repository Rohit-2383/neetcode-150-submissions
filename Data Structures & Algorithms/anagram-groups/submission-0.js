class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        if(!strs.length) return []

        const anaGramMap = new Map()

        for(let i  = 0 ; i<strs.length ; i++){

                const value = strs[i].split('').sort().join('')

                if(!anaGramMap.has(value))
                      anaGramMap.set(value,[])

                anaGramMap.get(value).push(strs[i])
        }

        return Array.from(anaGramMap.values())

    }
}
