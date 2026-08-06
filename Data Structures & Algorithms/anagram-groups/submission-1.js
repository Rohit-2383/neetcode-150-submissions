class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        if(!strs.length) return []

            if(!strs.length) return []

    const mapStr = new Map()

    for(const str of strs){
        const value = str.split('').sort().join('')
        if(!mapStr.has(value)) mapStr.set(value,[])

         mapStr.get(value).push(str)
          
    }

    return Array.from(mapStr.values())

    }
}
