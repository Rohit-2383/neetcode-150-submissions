class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
            let countObj = {}

    for(const item of nums){
        countObj[item] = (countObj[item]||0)+1
    }

   return  Object.entries(countObj).sort(([,a],[,b])=>b-a).slice(0,k).map(([key])=>(key))
        
    }
}
