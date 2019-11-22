class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    let currentIndex = this.values.length;
    this.values.push(value);

    while (currentIndex != 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (value <= this.values[parentIndex]) {
        return this;
      } else {
        // Swap
        [this.values[currentIndex], this.values[parentIndex]] = [
          this.values[parentIndex],
          this.values[currentIndex]
        ];
        currentIndex = parentIndex;
      }
    }

    return this;
  }

  extractMax() {
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0]
    ];
    const elementExtracted = this.values.pop();

    let currentIndex = 0;
    while (true) {
      const leftChild = this.values[currentIndex * 2 + 1];
      const rightChild = this.values[currentIndex * 2 + 2];
      const currentValue = this.values[currentIndex];
      if (currentValue < leftChild || currentValue < rightChild) {
        if (leftChild > rightChild) {
          [this.values[currentIndex], this.values[currentIndex * 2 + 1]] = [
            this.values[currentIndex * 2 + 1],
            this.values[currentIndex]
          ];
          currentIndex = currentIndex * 2 + 1;
        } else {
          [this.values[currentIndex], this.values[currentIndex * 2 + 2]] = [
            this.values[currentIndex * 2 + 2],
            this.values[currentIndex]
          ];
          currentIndex = currentIndex * 2 + 2;
        }
      } else {
        return elementExtracted;
      }
    }
  }
}

export default MaxBinaryHeap;
