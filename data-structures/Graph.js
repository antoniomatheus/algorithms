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

  DFSRecursive(start) {
    const result = [];
    const visited = {};
    (function iter(vertex, adjacencyList) {
      if (!adjacencyList[vertex]) {
        return;
      }
      result.push(vertex);
      visited[vertex] = true;
      for (let edge of adjacencyList[vertex]) {
        if (!visited[edge]) {
          iter(edge, adjacencyList);
        }
      }
    })(start, this.adjacencyList);
    return result;
  }

  DFSIter(start) {
    const stack = [start];
    const alreadyStacked = {
      [start]: true
    };
    const result = [];
    while (stack.length) {
      const vertex = stack.pop();
      if (!this.adjacencyList[vertex]) {
        return;
      }
      result.push(vertex);
      for (const edge of this.adjacencyList[vertex]) {
        if (!alreadyStacked[edge]) {
          stack.push(edge);
          alreadyStacked[edge] = true;
        }
      }
    }
    return result;
  }

  BFS(start) {
    const queue = [start];
    const result = [];
    const alreadyQueued = {
      [start]: true
    };
    while (queue.length) {
      const vertex = queue.shift();
      if (!this.adjacencyList[vertex]) return;
      result.push(vertex);
      for (const edge of this.adjacencyList[vertex]) {
        if (!alreadyQueued[edge]) {
          alreadyQueued[edge] = true;
          queue.push(edge);
        }
      }
    }
    return result;
  }
}

module.exports = Graph;

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.DFSRecursive("A"));
console.log(graph.DFSIter("A"));
console.log(graph.BFS("A"));
