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

test("insert at index, empty list", () => {
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
