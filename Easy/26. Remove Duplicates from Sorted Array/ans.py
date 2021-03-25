class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:    
        length = 0
        if len(nums) == 0: 
            return length
        for i in range(1,len(nums)):
            if nums[length] < nums[i]:
                length += 1
                nums[length] = nums[i]
        return length+1

# Since the array is already sorted, we can keep two pointers i and j, 
# where i is the slow-runner while j is the fast-runner. 
# As long as nums[i] = nums[j]nums[i]=nums[j], 
# we increment jj to skip the duplicate.

# When we encounter nums[j] not equal to nums[i], 
# the duplicate run has ended so we must copy its value to nums[i + 1]. 
# i is then incremented and we repeat the same process again 
# until j reaches the end of array.

