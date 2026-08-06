class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let longestCount = 0

        const mapSet = new Set(nums)

        for(const num of nums){
            if(!mapSet.has(num-1)){
                 let currentNum = num
                 let currentLongest = 1
            while(mapSet.has(currentNum+ 1)){
                currentNum+=1
                currentLongest+=1   
            }  
            longestCount = Math.max(currentLongest,longestCount)
        }

    }
        return longestCount
}
}
