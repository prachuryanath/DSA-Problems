class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        i=0
        l=len(nums)
        for i in range(l):
            if(nums[i]>=target):
                return i 
        return l