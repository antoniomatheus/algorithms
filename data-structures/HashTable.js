class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  // Array length should be a prime number to avoid collisions
  _hash(key) {
    let total = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const PRIME = 31;
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, val) {
    const hashValue = this._hash(key);
    if (this.keyMap[hashValue]) {
      this.keyMap[hashValue].push([key, val]);
    } else {
      this.keyMap[hashValue] = [[key, val]];
    }
    return this;
  }

  get(key) {
    const hashValue = this._hash(key);
    if (!this.keyMap[hashValue]) return undefined;
    for (let keyValue of this.keyMap[hashValue]) {
      if (keyValue[0] == key) return keyValue;
    }
    return undefined;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let keyValue of this.keyMap[i]) {
          keys.push(keyValue[0]);
        }
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let keyValue of this.keyMap[i]) {
          values.push(keyValue[1]);
        }
      }
    }
    return values;
  }
}
