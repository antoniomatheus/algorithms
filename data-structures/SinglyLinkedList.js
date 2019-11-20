class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    }
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    let current = this.head;

    if (!current) {
      return;
    }

    while (current.next != this.tail && current.next) {
      current = current.next;
    }

    current.next = null;

    const poppedElement = this.tail;
    this.tail = current;
    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return poppedElement;
  }

  shift() {
    if (!this.length) {
      return;
    }

    const elementRemoved = this.head;

    this.head = this.head.next;
    this.length--;

    if (!this.length) {
      this.tail = null;
    }

    return elementRemoved;
  }

  unshift(val) {
    const newNode = new Node(val);

    const previousHead = this.head;
    newNode.next = previousHead;
    this.head = newNode;
    this.length++;

    return this;
  }

  get(index) {
    if (!this.length || index >= this.length) {
      return;
    }

    let currentNode = this.head;
    let counter = 0;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  set(val, index) {
    const node = this.get(index);

    if (!node) {
      return;
    }

    node.val = val;

    return this;
  }

  insert(val, index) {
    if (!this.length || index >= this.length) {
      return;
    }

    if (index == this.length) {
      this.push(val);
    } else if (index == 0) {
      this.unshift(val);
    }

    const newNode = new Node(val);

    let counter = 0;
    let previousNode = null;
    let currentNode = this.head;

    while (counter < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }

    previousNode.next = newNode;
    newNode.next = currentNode;
    this.length++;

    return this;
  }

  remove(index) {
    if (!this.length || index >= this.length) {
      return;
    }

    if (index == this.length) {
      this.pop();
    } else if (index == 0) {
      this.shift();
    }

    let counter = 0;
    let previousNode = null;
    let currentNode = this.head;

    while (counter < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }

    previousNode.next = currentNode.next;
    this.length--;

    return this;
  }

  reverse() {
    if (!this.length) {
      return;
    }

    let nextNode = this.head;
    let currentNode = this.head.next;
    nextNode.next = null;

    while (currentNode) {
      const temp = currentNode.next;
      currentNode.next = nextNode;
      nextNode = currentNode;
      currentNode = temp;
    }

    const previousHead = this.head;
    this.head = this.tail;
    this.tail = previousHead;

    return this;
  }
}

export default SinglyLinkedList;
