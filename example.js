// Create a video and record yourself explaining the following question: -
// How to search an element in a sorted array using Binary Search.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// target 7

function binary_search(arr, target) {
    let left, right, mid;
    left = 0;
    right = arr.length - 1;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

console.log(binary_search(nums, 9));