class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

          if (!nums.length) return [];

      let len = 0
    const arr = []
     while(len<nums.length){
          const  product =  [
         ...nums.slice(0,len),
         ...nums.slice(len+1)
         ].reduce((acc,curr)=>acc*curr,1)
         len++
         arr.push(product)
     }
    
    return arr

    }
}
