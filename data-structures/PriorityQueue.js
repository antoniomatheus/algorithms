class PriorityQueue {
  constructor() {
    this.values = [];
  }

  insert(value, priority) {
    const newNode = new Node(value, priority);
    let currentIndex = this.values.length;
    this.values.push(newNode);

    while (currentIndex != 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (priority <= this.values[parentIndex].priority) {
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
      const leftChild = this.values[currentIndex * 2 + 1]
        ? this.values[currentIndex * 2 + 1].priority
        : undefined;
      const rightChild = this.values[currentIndex * 2 + 2]
        ? this.values[currentIndex * 2 + 2].priority
        : undefined;
      const currentValue = this.values[currentIndex].priority;
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

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

export default PriorityQueue;
