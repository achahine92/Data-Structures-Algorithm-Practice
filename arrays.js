// ARRAYS - CONTAINS DUPLICATES
/* Given an integer array nums, return true if 
    any value appears more than once in the array, 
    otherwise return false. 
*/

class Solution {
    // O(N^2) time complexity - worst case scenario
    // has to iterate through every num in the array to test for duplicates
    /* hasDuplicate = nums => {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) return true
            }
        }
        return false 
    } */

    // O(NlogN) time complexity - slightly better
    // sorts array so we only have to compare a num to its neighbor
    // and any duplicates will be side-by-side
    /* hasDuplicate = nums => {
        nums.sort((a, b) => a - b) // ascending order
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i + 1]) return true
        }
        return false
    } */

    // O(N) time complexity - best case scenario
    // iterate through the array to add each num to a new array
    // if you come across a num that's already in the new set, it will automatically return true
    hasDuplicate = nums => {
        const newNums = new Set()
        for (const num of nums) {
            if (newNums.has(num)) return true // here we use .has instead of .includes - includes refers to strict equality (===) whereas has just checks if a value exists. important distinction when making a new Set from an existing array
            newNums.add(num) // similarly, add is used here instead of push bc add is used for Sets and Maps, whereas push it used strictly for arrays
        }
        return false
    }
}

// ---------------------------------------------------------------------------------

// ARRAYS - VALID ANAGRAM
/* Given two strings s and t, return true if the two strings are 
    anagrams of each other, otherwise return false.
    An anagram is a string that contains the exact same characters as 
    another string, but the order of the characters can be different. 
*/

class Solution {
    // O(NlogN + MlogM) time complexity - worst case scenario
    // uses sorting to sort s and t in order, then iterate and compare 
    // each character in both s and t to see if they're the same
    /*
    isAnagram = (s, t) => {
        if (s.length !== t.length) return false
        s = s.toLowerCase()
        t = t.toLowerCase()
        let sSort = s.split("").sort().join()
        let tSort = t.split("").sort().join()
        if (sSort !== tSort) return false

        return true
    }
    */

    // O(N + M) time complexity - best case scenario
    // using hash tables to count # of each char in s and 
    // decrement through t to check if the same amount of the 
    // same chars exist 
    isAnagram = (s, t) => {
        if (s.length !== t.length) return false
        
        let charCount = {} // create an empty object to keep count of chars, key will be char and value will be # of times it appears in the word
        for (const char of s) {
            charCount[char] = (charCount[char] || 0) +1 // add 1 to the total number of chars in s, or if it's at 0, add 1
        }

        for (const char of t) { // now iterate through t
            if (!charCount[char]) return false // if a char doesn't have the same count as charCount calculated from s, return false
            charCount[char]-- // work your way down and decrement
        }
        return true // then return true
    }
}

// ---------------------------------------------------------------------------------

// ARRAYS - TWO SUM
/* Given an array of integers nums and an integer target, return the indices 
    i and j such that nums[i] + nums[j] == target and i != j.
    You may assume that every input has exactly one pair of indices i and j 
    that satisfy the condition. 
*/

class Solution {
    // O(N^2) time complexity - worst case scenario
    // using brute force, loop through the nums array and follow two indeces i and j
    // if those numbers add up to equal the target, return those numbers
    // this will require iterating through each number in nums and finding the sum with another number in nums, and continue going until we find the target number
    /*
    twoSum = (nums, target) => {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (i != j) {
                    if (nums[i] + nums[j] === target) return [i, j]
                }
            }
        }
        return []
    }
    */

    // O(N) time complexity - best case scenario
    // find the difference between target and i and search the array nums for the difference
    // if it exists, then return [i, index of difference]
    twoSum = (nums, target) => {
        let indices = {} // create empty object indices: key will be the number in nums and value will be its position
        for (let i = 0; i < nums.length; i++) { // loop through to collect data for what i will be
            indices[nums[i]] = i // index of number at nums[i] is i
        }
        for (let i = 0; i < nums.length; i++) { // now loop through again but this time, to calculate diff and search for it in the nums array
            let diff = target - nums[i] // diff = target - nums[i]
            if (indices[diff] !== undefined && indices[diff] !== i) { // as long as diff is not undefined and it's not equal to i
                return [i, indices[diff]] 
            }
        }
        return []
    }
}

// ---------------------------------------------------------------------------------