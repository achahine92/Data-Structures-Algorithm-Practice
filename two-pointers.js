// TWO POINTERS - VALID PALINDROME
/* Given a string s, return true if it is a palindrome, 
    otherwise return false.
*/

class Solution {
    // O(N) time complexity and O(N) space complexity - good but can be better 
    // with O(1) space complexity. Use two pointer method for that (below)
    
    // In the worst case scenario, we can crease a copy of s and reverse it.
    // then compare s to reverseS to see if they're the same. This is only useful 
    // if the string contains only alphanumeric characters (no spaces, punctuation, or case variety)
    /*
    isPalindrome = s => {
        const reverseS = s.split('').reverse().join('')
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== reverseS[i]) return false
        }
        return true
    }
    */

    // Using two-pointer method, without accounting for alphamueric characters
    /*
    isPalindrome = s => {
        let left = 0
        let right = s.length - 1
        while (left < right) {
            if (s[left] !== s[right]) return false
            left++
            right--
        }
        return true
    }
    */

    // Now use two-pointer method, but include considerations for alphanumeric characters
    isAlphaNumeric = char => {
        if (char >= 'A' && char <= 'Z' 
            || char >= 'a' && char <= 'z'
            || char >= '0' && char <= '9') {
                return true
            }
    }

    isPalindrome = s => {
        let left = 0
        let right = s.length - 1
        while (left < right) {
            while (left < right && !this.isAlphaNumeric(s[left])) { 
                /* only reason we use "this" is because isAlphaNumeric and 
                    isPalindrome functions exist within a class, so the two 
                    functions are methods of the class Solution{}. Therefore they 
                    don't behave like regular hoisted functions, and they need to be connected 
                    using a class instance (i.e. "this") */
                left++ // if the character at s[left] is not alphanumeric, skip it and move left
            }
            while (right > left && !this.isAlphaNumeric(s[right])) {
                right-- // if the character at s[right] is not alphanumeric, skip it and move right
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false // if (once changed to lower case) s[left] and s[right] are not equal at any point, return false
            }
            left++ // move one left and continue the loop
            right-- // move one right and continue the loop
        }
        return true
    }
}

// ---------------------------------------------------------------------------------
