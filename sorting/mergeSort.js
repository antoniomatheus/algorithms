export default function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const leftArray = mergeSort(arr.slice(0, middleIndex));
  const rightArray = mergeSort(arr.slice(middleIndex));

  return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray) {
  let result = [];
  let leftPointer = 0;
  let rightPointer = 0;

  while (leftPointer < leftArray.length && rightPointer < rightArray.length) {
    if (leftArray[leftPointer] > rightArray[rightPointer]) {
      result.push(rightArray[rightPointer]);
      rightPointer++;
    } else {
      result.push(leftArray[leftPointer]);
      leftPointer++;
    }
  }

  while (leftPointer < leftArray.length) {
    result.push(leftArray[leftPointer]);
    leftPointer++;
  }

  while (rightPointer < rightArray.length) {
    result.push(rightArray[rightPointer]);
    rightPointer++;
  }

  return result;
}
