class Node {
  value = null;
  nextNode = null;

  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
  #head = null;
  #tail = null;

  get head() {
    return this.#head === null ? undefined : this.#head.value;
  }

  get tail() {
    return this.#tail === null ? undefined : this.#tail.value;
  }

  size() {
    if (this.#head === null) return 0;

    let totalSize = 1;
    let currentNode = this.#head;

    while (currentNode !== this.#tail) {
      totalSize++;
      currentNode = currentNode.nextNode;
    }

    return totalSize;
  }

  append(value) {
    let node = new Node(value);
    if (this.#tail === null) this.#head = node;
    else {
      this.#tail.nextNode = node;
    }
    this.#tail = node;
  }

  prepend(value) {
    let node = new Node(value, this.#head);
    if (this.#tail === null) this.#tail = node;
    this.#head = node;
  }

  at(index, returnNode = false) {
    if (this.#head === null) return undefined; // list is empty

    let currentIndex = 0;
    let currentNode = this.#head;

    while (currentIndex < index) {
      if (currentNode.nextNode === null) return undefined; // out of bounds
      currentIndex++;
      currentNode = currentNode.nextNode;
    }

    return returnNode ? currentNode : currentNode.value;
  }

  insertAt(index, ...values) {
    let prevNode = this.at(index - 1, true);

    if (index !== 0 && prevNode === undefined)
      throw RangeError("Index out of bounds!");

    let endNode = this.at(index, true);

    values.forEach((value, i) => {
      let node = new Node(value);
      if (prevNode !== undefined) prevNode.nextNode = node;
      else this.#head = node;
      if (i === values.length - 1) {
        if (endNode !== undefined) node.nextNode = endNode;
        else this.#tail = node;
      }
      prevNode = node;
    });
  }

  removeAt(index) {
    let node = this.at(index, true);

    if (node === undefined) {
      if (index === 0) return;
      else throw RangeError("Index out of bounds!");
    }

    let prevNode = this.at(index - 1, true);

    if (prevNode !== undefined) prevNode.nextNode = node.nextNode;

    if (this.#head === node) this.#head = node.nextNode;
    if (this.#tail === node) this.#tail = prevNode;
  }

  removeFirst() {
    if (this.#head === null) return undefined;

    let node = this.#head;

    if (this.#head === this.#tail) {
      this.#head = null;
      this.#tail = null;
    } else {
      this.#head = node.nextNode;
    }

    return node.value;
  }

  removeLast() {
    if (this.#head === null) return undefined;

    let node = this.#tail;

    if (this.#head === node) {
      this.#head = null;
      this.#tail = null;
    } else {
      this.#tail = this.at(this.size() - 2, true);
      this.#tail.nextNode = null;
    }

    return node.value;
  }

  contains(value) {
    if (this.#head === null) return false;

    let currentNode = this.#head;

    while (currentNode.value !== value) {
      if (currentNode.nextNode === null) return false;
      currentNode = currentNode.nextNode;
    }

    return true;
  }

  findIndex(value) {
    if (this.#head === null) return -1;

    let currentIndex = 0;
    let currentNode = this.#head;

    while (currentNode.value !== value) {
      if (currentNode.nextNode === null) return -1;
      currentIndex++;
      currentNode = currentNode.nextNode;
    }

    return currentIndex;
  }

  toString() {
    if (this.#head === null) return "";

    let result = `( ${this.#head.value} )`;
    let currentNode = this.#head;

    while (currentNode.nextNode !== null) {
      result += ` -> ( ${currentNode.nextNode.value} )`;
      currentNode = currentNode.nextNode;
    }

    result += ` -> null`;

    return result;
  }
}
