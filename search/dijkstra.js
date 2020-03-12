const PriorityQueue = require("../data-structures/PriorityQueueBasic");

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = {};
    }
    return this;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      throw new Error(`${vertex} doesn't exist.`);
    }

    for (const edge of Object.keys(this.adjacencyList[vertex])) {
      delete this.adjacencyList[edge][vertex];
    }
    delete this.adjacencyList[vertex];
    return this;
  }

  addEdge(vertexOne, vertexTwo, weight) {
    if (!this.adjacencyList[vertexOne]) {
      throw new Error(`${vertexOne} doesn't exist.`);
    } else if (!this.adjacencyList[vertexTwo]) {
      throw new Error(`${vertexTwo} doesn't exist.`);
    }

    this.adjacencyList[vertexOne][vertexTwo] = weight;
    this.adjacencyList[vertexTwo][vertexOne] = weight;
    return this;
  }

  removeEdge(vertexOne, vertexTwo) {
    if (!this.adjacencyList[vertexOne]) {
      throw new Error(`${vertexOne} doesn't exist.`);
    } else if (!this.adjacencyList[vertexTwo]) {
      throw new Error(`${vertexTwo} doesn't exist.`);
    }

    delete this.adjacencyList[vertexOne][vertexTwo];
    delete this.adjacencyList[vertexTwo][vertexOne];

    return this;
  }

  path(from, to) {
    const queue = new PriorityQueue();
    const previous = {};
    const shortestDistances = {};

    for (const vertex of Object.keys(this.adjacencyList)) {
      if (vertex === from) {
        queue.enqueue(vertex, 0);
        shortestDistances[vertex] = 0;
      } else {
        shortestDistances[vertex] = Infinity;
      }
      previous[vertex] = null;
    }

    const visited = [];
    let currentVertex = queue.dequeue().val;

    while (currentVertex) {
      visited.push(currentVertex);

      if (currentVertex === to) {
        return getPath(to, previous);
      }

      const neighbors = this.adjacencyList[currentVertex];
      for (const neighbor of Object.keys(neighbors)) {
        if (visited.includes(neighbor)) {
          continue;
        }

        const distanceToNeighbor =
          shortestDistances[currentVertex] +
          this.adjacencyList[currentVertex][neighbor];

        if (distanceToNeighbor < shortestDistances[neighbor]) {
          shortestDistances[neighbor] = distanceToNeighbor;
          previous[neighbor] = currentVertex;
          queue.enqueue(neighbor, distanceToNeighbor);
        }
      }

      currentVertex = queue.dequeue().val;
    }
  }
}

function getPath(destination, previous) {
  const path = [];
  let current = destination;

  do {
    path.push(current);
    current = previous[current];
  } while (current);

  return path;
}

module.exports = WeightedGraph;
