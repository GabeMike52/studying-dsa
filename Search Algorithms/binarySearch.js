// O(logn)
function binarySearch(arr, target) {
    let leftMost = 0;
    let rightMost = arr.length - 1;
    while (leftMost <= rightMost) {
        let mid = Math.floor((leftMost + rightMost) / 2);
        if (target === arr[mid]) return mid;
        else if (target < arr[mid]) rightMost = mid - 1;
        else leftMost = mid + 1;
    }
    return -1;
}
