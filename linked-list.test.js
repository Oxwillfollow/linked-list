import { LinkedList } from "./linked-list";

test("at non-existant index", () => {
  let list = new LinkedList();
  expect(list.at(5)).toBe(undefined);
});

test("size", () => {
  let list = new LinkedList();
  expect(list.size()).toBe(0);
  list.append(1);
  list.append(4);
  list.prepend(222);
  expect(list.size()).toBe(3);
});

test("appending to an empty list", () => {
  let list = new LinkedList();
  list.append("hello");
  expect(list.head).toBe("hello");
  expect(list.tail).toBe("hello");
});

test("prepending to an empty list", () => {
  let list = new LinkedList();
  list.prepend(12);
  expect(list.head).toBe(12);
  expect(list.tail).toBe(12);
});

test("appending/prepending multiple times", () => {
  let list = new LinkedList();
  list.prepend(1);
  list.append(2);
  list.append(3);
  list.prepend(0);
  list.append(4);
  expect(list.head).toBe(0);
  expect(list.tail).toBe(4);
  expect(list.size()).toBe(5);
});

test("insert at index", () => {
  let list = new LinkedList();

  function insertSomeThingsOutOfBounds() {
    list.insertAt(4, "hello", "bonjour");
  }

  expect(insertSomeThingsOutOfBounds).toThrow("out of bounds");

  list.insertAt(0, "hello", "bonjour");
  expect(list.at(0)).toBe("hello");
  expect(list.at(1)).toBe("bonjour");
  expect(list.at(2)).toBe(undefined);
});

test("remove at index", () => {
  let list = new LinkedList();

  function removeOutOfBounds() {
    list.removeAt(10);
  }

  expect(removeOutOfBounds).toThrow("out of bounds");

  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.removeAt(2);
  list.removeAt(0);
  expect(list.at(0)).toBe(2);
  expect(list.at(1)).toBe(4);
});

test("removeFirst", () => {
  let list = new LinkedList();

  expect(list.removeFirst()).toBe(undefined);
  list.append("hello");
  list.append("bye");
  expect(list.removeFirst()).toBe("hello");
  expect(list.size()).toBe(1);
  expect(list.removeFirst()).toBe("bye");
  expect(list.size()).toBe(0);
});

test("removeLast", () => {
  let list = new LinkedList();

  expect(list.removeLast()).toBe(undefined);
  list.append("hello");
  list.append("bye");
  expect(list.removeLast()).toBe("bye");
  expect(list.size()).toBe(1);
  expect(list.removeLast()).toBe("hello");
  expect(list.size()).toBe(0);
});

test("contains", () => {
  let list = new LinkedList();
  expect(list.contains("dog")).toBe(false);

  list.append("cat");

  expect(list.contains("dog")).toBe(false);
  list.append("dog");

  expect(list.contains("dog")).toBe(true);
  expect(list.contains("cat")).toBe(true);
});
