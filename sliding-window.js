// SLIDING WINDOW - BEST TIME TO BUY/SELL STOCK
/* You are given an integer array prices where prices[i] is the 
    price of NeetCoin on the ith day. You may choose a single day to 
    buy one NeetCoin and choose a different day in the future to sell it. 
    Return the maximum profit you can achieve. You may choose to not make 
    any transactions, in which case the profit would be 0.
*/

class Solution {
    // O(N) time complexity - medium case scenario using two pointer method
        // set a value for buy price, set value for each sell price as the 
        // number right after iterate through the array and if the buy price is 
        // less than the sell price, calc the difference. set the max profit as a 
        // Math.max() comparison between max profit calculated and the last profit calculated.
        // else let the number on the left become the number on the right, and the number on 
        // the right becomes the next number. keep iterating through until you've 
        // compared all potential profits and print the max profit calculated
    maxProfit(prices) {
        let left = 0
        let right = 1
        let maxP = 0
        while (right < prices.length) {
            if (prices[left] < prices[right]) {
                let profit = prices[right] - prices[left]
                maxP = Math.max(maxP, profit)
            } else {
                left = right
            }
            right++
        }
        return maxP
    }
}