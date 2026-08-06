class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    const mapSet = new Map()

    for(const num of  nums){
         if(!mapSet.has(num)) mapSet.set(num,0)

         mapSet.set(num ,mapSet.get(num)+1)
    }
    
    return  Array.from(mapSet.entries()).sort((a,b)=>b[1]-a[1]).slice(0,k).map(ele=>ele[0])
        
    }
}
