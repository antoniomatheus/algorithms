export default function selectionSort(arr) {
  if (arr.length === 0) return;

  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) indexMin = j;
    }

    if (i != indexMin) {
      let temp = arr[i];
      arr[i] = arr[indexMin];
      arr[indexMin] = temp;
    }
  }

  return arr;
}
