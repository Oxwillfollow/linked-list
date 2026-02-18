export class LinkedList {
  #head = null;
  #tail = null;

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  size() {
    if (this.#head === null) return 0;

    let totalSize = 0;
    let currentNode = this.#head;
    while (currentNode !== tail) {
      totalSize++;
      currentNode = currentNode.nextNode;
    }

    return totalSize;
  }

  append(value) {
    let node = new Node(value);
    if (this.#head === null) this.#head = node;
    this.#tail = node;
  }

  prepend(value) {
    let node = new Node(value, this.#head);
    if (this.#tail === null) this.#tail = node;
    this.#head = node;
  }

  at(index) {
    if (this.#head === null) return undefined;

    let currentIndex = 0;
    let currentNode = this.#head;
    while (currentIndex < index) {
      currentIndex++;
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  insertAt(index, ...values) {}

  removeAt(index) {}

  removeFirst() {}

  removeLast() {}

  contains(value) {}

  findIndex(value) {}

  toString() {
    return `( value ) -> ( value ) -> ( value ) -> null`;
  }
}

class Node {
  value = null;
  nextNode = null;

  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
