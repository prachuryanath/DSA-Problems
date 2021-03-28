const maxSubArray = nums => {
    let max = nums[0];
    let current = Math.max(max, 0);
    
    for (let i = 1; i < nums.length; i += 1) {
        current += nums[i];
        max = Math.max(max, current);
        current = Math.max(current, 0);
    }
    
    return max;
};
// ***Kadane's Algorithm***
// 1.set initials
// 1.1 first value in the array. It doesn’t matter to us whether max is positive or negative.
// 1.2 we need an intermediate current positive value, because a negative value does not interest us, since -2 is always more than -5 and it means 0 + -2 > -5.
// 2.At this point we've covered first value in the array, that's why we will move through array starting from the 1 index.
// 3.current += nums[i] means that every time we take a new value, we will sum it with the past current value. This will help us discard lower values in the next step.
// 4.max = Math.max(max, current) means that we choose only the highest value (previous max or new current).
// 5.current = Math.max(current, 0) means that if the value was negative, then we throw it away and set zero as default. Why? Because it makes no sense to summarize the negative values, they simply do not interest us. The previous step is enough to compare negative values. There we will choose the minimum negative value (if it is the case i.e [-10, -3, -5, -2, -6] will return only -2 because it is the highest value from the negative ones.