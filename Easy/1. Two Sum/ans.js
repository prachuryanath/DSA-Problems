var twoSum = function(nums, target) {
    var ans = [];
    var exist = {};
    
    for (var i = 0; i < nums.length; i++){
        if (typeof(exist[target-nums[i]]) !== 'undefined'){
            ans.push(exist[target-nums[i]]);
            ans.push(i);
        }
        exist[nums[i]] = i;
    }    
    return ans;
};