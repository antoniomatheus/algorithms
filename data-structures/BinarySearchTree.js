class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          newNode.parent = currentNode;
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          newNode.parent = currentNode;
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  find(val) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value == val) {
        return true;
      } else if (currentNode.value > val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  // Pre-order
  traverseBFS() {
    const data = [];
    const queue = [this.root];
    while (queue.length) {
      const currentNode = queue.shift();
      data.push(currentNode);
      currentNode.left && queue.push(currentNode.left);
      currentNode.right && queue.push(currentNode.right);
    }
    return data;
  }

  // Pre-order
  traverseDFS() {
    const data = [];
    function iter(node) {
      console.log(node);
      node.left && iter(node.left);
      node.right && iter(node.right);
    }
    iter(this.root);
    return data;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
