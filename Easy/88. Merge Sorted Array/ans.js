// Inserting into the back of the nums1 we only need to insert until we run out of nums2 since everything else is already inplace at the front of nums1

var merge = function (nums1, m, nums2, n) {
    var insertPos = m + n - 1;
    m--; n--;
    while (n >= 0) {
        nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
    }
};
