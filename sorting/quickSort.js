/**
 *
 * This implementation uses the sub-array's first element as the pivot.
 *
 * @param {object Array} arr    The array to be sorted
 * @param {number} start        The slice's start index to be sorted
 * @param {number} end          The slice's end index to be sorted
 */
export default function quickSort(arr, start = 0, end = arr.length) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivotIndex = start;
  for (let i = start + 1; i < end; i++) {
    if (arr[pivotIndex] > arr[i]) {
      pivotIndex++;
      [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
    }
  }

  [arr[pivotIndex], arr[start]] = [arr[start], arr[pivotIndex]];

  quickSort(arr, start, pivotIndex);
  quickSort(arr, pivotIndex + 1, end);

  return arr;
}
