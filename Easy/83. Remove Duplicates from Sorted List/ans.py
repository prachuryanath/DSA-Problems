class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        # if input head is NULL, return it
        # if input is single node, return it since there are no repetitions
        if not head or not head.next:
            return head
        
        # we know we have atleast two nodes
        # we use two pointers, we are testing if the candidate pointer (curr) is a duplicate
        prev=head
        curr=prev.next
        
        # we will loop until there are no more candidate pointers to evaluate
        while curr:
            if curr.val==prev.val:
                prev.next = curr.next       # skip the curr node and therefore remove it from linked list
            else:
                prev = curr                 # increment the prev node
            curr = curr.next                # increment the candidate node
        return head
    
# We considered every node excatly one, so we have O(N) time complexity
# We used two pointers, so we have O(1) space complexity
# Submission results:
# Runtime: 32 ms, faster than 98.69% of Python3 online submissions for Remove Duplicates from Sorted List.
# Memory Usage: 14.4 MB, less than 27.40% of Python3 online submissions for Remove Duplicates from Sorted List.
