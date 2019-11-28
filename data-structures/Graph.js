class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
    return this;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      throw new Error(`${vertex} doesn't exist.`);
    }

    for (let edge of this.adjacencyList[vertex]) {
      this.adjacencyList[edge] = this.adjacencyList[edge].filter(
        edge => edge != vertex
      );
    }
    delete this.adjacencyList[vertex];
    return this;
  }

  addEdge(vertexOne, vertexTwo) {
    if (!this.adjacencyList[vertexOne]) {
      throw new Error(`${vertexOne} doesn't exist.`);
    } else if (!this.adjacencyList[vertexTwo]) {
      throw new Error(`${vertexTwo} doesn't exist.`);
    }

    this.adjacencyList[vertexOne].push(vertexTwo);
    this.adjacencyList[vertexTwo].push(vertexOne);
    return this;
  }

  removeEdge(vertexOne, vertexTwo) {
    if (!this.adjacencyList[vertexOne]) {
      throw new Error(`${vertexOne} doesn't exist.`);
    } else if (!this.adjacencyList[vertexTwo]) {
      throw new Error(`${vertexTwo} doesn't exist.`);
    }

    this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(
      edge => edge !== vertexTwo
    );

    this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(
      edge => edge !== vertexOne
    );

    return this;
  }
}
