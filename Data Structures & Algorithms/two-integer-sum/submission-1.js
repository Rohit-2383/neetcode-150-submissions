class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        if(!nums.length) return []

        const mapNum = new Map()

        for (let i = 0 ; i<nums.length ; i++){
            const value = target - nums[i]
            if(mapNum.has(value)) return [mapNum.get(value),i]
            
            mapNum.set(nums[i],i)
        }
    }
}
