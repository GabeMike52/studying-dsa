// O(logn)
function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftMost, rightMost) {
    if (leftMost > rightMost) {
        return -1;
    }

    let mid = Math.floor((leftMost + rightMost) / 2);

    if (target === arr[mid]) {
        return mid;
    } else if (target < arr[mid]) {
        return search(arr, target, leftMost, mid - 1);
    } else {
        return search(arr, target, mid + 1, rightMost);
    }
}
