var removeElement = function(nums, val) {
    let newLen = 0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] == val) {
            continue;
        }
        nums[newLen] = nums[i]; 
        newLen++;
    }
    return newLen;
};

// When nums[j] equals to the given value, skip this element by incrementing j. 
// As long as nums[j] != val, we copy nums[j] to nums[i] 
// and increment both indexes at the same time.Repeat the process 
// until j reaches the end of the array and the new length is i.