class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        if not nums: return None
        
        # Each item in the stack holds: floor, ceiling, parent and parent's direction.
        stack = [(0, len(nums) - 1, None, None)]
        root = None
        while stack:
            floor, ceiling, parent, direction = stack.pop()
            middleIndex = (floor + ceiling) // 2
            n = TreeNode(nums[middleIndex])
            
            # Add the root node. parent should only ever be null in this one case.
            if not parent:
                root = n
            else:
                if direction == 'l':
                    parent.left = n
                elif direction == 'r':
                    parent.right = n
            
            # Add the next items to the stack, as necessary. Add right first.
			# Similar to the recursive approach, both floor and ceiling should never cross.
            if middleIndex + 1 <= ceiling:
                stack.append((middleIndex + 1, ceiling, n, 'r'))
            if floor <= middleIndex - 1:
                stack.append((floor, middleIndex - 1, n, 'l'))
        return root
