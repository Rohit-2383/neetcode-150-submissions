class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
     const setStore = new Set()

    for(const num of nums){

         if(setStore.has(num)) return true

          setStore.add(num)
    }
    return false
    }
}
