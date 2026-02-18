export class LinkedList {
  #head = null;
  #tail = null;

  get head() {
    return this.#head.value;
  }

  get tail() {
    return this.#tail.value;
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
    let prevNode = this.at(index, true);

    if (index !== 0 && prevNode === undefined)
      throw RangeError("Index out of bounds!");

    let endNode = this.at(index + values.length, true);

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
