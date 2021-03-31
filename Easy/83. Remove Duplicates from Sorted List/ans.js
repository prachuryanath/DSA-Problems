var deleteDuplicates = function(head) {
    // the head points to the linked list
    if (head == null) return head
    
    // have a pointer to the head, which in this case is the full linked list
    let currHead = head
    
    while (currHead.next != null) {
        if (currHead.val == currHead.next.val) {
            // currHead doesn't change but the link/currHead.next would change and skip, so currHead could be seen as temporary unless solidfied in the else statement
            currHead.next = currHead.next.next
        } else {
            // if not equal to each other then currHead now links to currHead.next
            // solidfying the link
            currHead = currHead.next
        }
    }
    
    // after all the changes to the links made by the currHead, the head, which points to the entire linked list, outputs the new link list if there are changes made.
    return head    
};
