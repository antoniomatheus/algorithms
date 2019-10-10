function binarySearch(array, num){
    let left = 0;
    let right = array.length - 1;
    let middle = Math.floor((right + left) / 2);
    while (left != right) {
        if (array[middle] == num) return middle;
        if (array[middle] < num) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
        middle = Math.floor((right + left) / 2);
    }
    return array[middle] === num ? middle : -1;
}
