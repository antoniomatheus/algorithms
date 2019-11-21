class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) {
      return;
    }
    const poppedNode = this.tail;

    if (this.length == 1) {
      this.head = null;
    } else {
      poppedNode.prev.next = null;
    }

    this.tail = poppedNode.prev;
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.length) {
      return;
    }

    const shiftedNode = this.head;

    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      shiftedNode.next.prev = null;
    }
    this.length--;
    return shiftedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return;
    }

    if (index == 0) {
      return this.head;
    } else if (index == this.length - 1) {
      return this.tail;
    }

    let node;

    if (index < this.length / 2) {
      let count = 0;
      node = this.head;
      while (count < index) {
        node = node.next;
        count++;
      }
    } else {
      let count = this.length - 1;
      node = this.tail;
      while (count > index) {
        node = node.prev;
        count--;
      }
    }

    return node;
  }

  set(val, index) {
    if (!this.length) return;

    let node = this.get(index);

    node.val = val;

    return this;
  }

  insert(val, index) {
    if (index == 0) {
      return this.unshift(val);
    } else if (index == this.length) {
      return this.push(val);
    }

    const node = this.get(index);
    const newNode = new Node(val);

    if (!node) {
      return;
    }

    newNode.prev = node.prev;
    newNode.next = node;
    node.prev.next = newNode;
    node.prev = newNode;
    this.length++;

    return this;
  }

  remove(index) {
    if (!this.length) return;

    if (index == 0) {
      this.shift();
      return this;
    } else if (index == this.length - 1) {
      this.pop();
      return this;
    }

    let node = this.get(index);
    if (!node) {
      return;
    }

    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.length--;

    return this;
  }
}

export default DoublyLinkedList;
