def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
	head = ListNode()
	curr = head
	while l1 and l2:
		while l1 and l2 and l1.val <= l2.val:
			curr.next = l1
			l1 = l1.next
			curr = curr.next
		while l1 and l2 and l2.val <= l1.val:
			curr.next = l2
			l2 = l2.next
			curr = curr.next
	curr.next = l1 or l2
	return head.next