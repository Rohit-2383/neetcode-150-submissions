class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        s = s.toLowerCase();

        let left = 0;
        let right = s.length -1;
        
        const regex = /^[a-z0-9]$/i;

        while(left < right){
        
            while(left < right && !regex.test(s[left])) left++;
            while(right > left && !regex.test(s[right])) right--;

            if(s[left] !== s[right]) return false;
                        
            left++;
            right--;
        }
        return true;
    }
}
