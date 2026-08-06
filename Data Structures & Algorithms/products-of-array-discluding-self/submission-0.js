class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

          if (!nums.length) return [];

     const arrToReturn = []

    for (let i = 0; i < nums.length; i++) {
        const product = [
            ...nums.slice(0, i),
            ...nums.slice(i + 1),
        ].reduce((acc, curr) => acc * curr, 1);

        arrToReturn.push(product)

    }

    return arrToReturn;
    }
}
