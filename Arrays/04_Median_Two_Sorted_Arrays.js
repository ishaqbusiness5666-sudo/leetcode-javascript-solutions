const findMedianSortedArrays = function (nums1, nums2) {

    const Arr = Arangement(nums1, nums2);

    if (Arr.length % 2 !== 0) {
        const middleIs = Math.floor(Arr.length / 2);
        return Arr[middleIs];
    } else {
        const middle = Math.floor(Arr.length / 2);
        return (Arr[middle] + Arr[middle - 1]) / 2;
    }
};

const Arangement = function (nums1, nums2) {
    const merged = [...nums1, ...nums2];
    merged.sort((a, b) => a - b);
    return merged;
};