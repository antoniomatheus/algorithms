export default function insertionSort(arr) {
  if (arr.length == 0) return;

  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (currentValue < arr[j]) {
        arr[j + 1] = arr[j];
        if (j == 0) {
          arr[j] = currentValue;
        }
      } else {
        arr[j + 1] = currentValue;
        break;
      }
    }
  }

  return arr;
}
