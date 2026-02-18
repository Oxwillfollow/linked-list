# linked-list

Implementation of [Linked List](https://en.wikipedia.org/wiki/Linked_list) in Javascript.

**`LinkedList` class:**

Properties:

- `.#head` (private) returns the first node in the list. Returns `null` if the list is empty.
- `.#tail` (private) returns the last node in the list. Returns `null` if the list is empty.
- `.head` (getter) returns the value of the first node in the list. Returns `undefined` if the list is empty.
- `.tail` (getter) returns the value of the last node in the list. Returns `undefined` if the list is empty.

Methods:

- `size()` returns the total number of nodes in the list.
- `append(value)` adds a new node containing `value` to the end of the list.
- `prepend(value)` adds a new node containing `value` to the start of the list.
- `at(index)` returns the value of the node at the given index, and `undefined` if there is no node at the given index.
- `insertAt(index, ...values)` inserts new nodes in the list starting at `index` with values taken from `...values`.
- `removeAt(index)` removes the node at the given `index`.
- `removeFirst()` removes the head node from the list and returns its value. If used on an empty list, it returns `undefined`.
- `removeLast()` removes the tail node from the list and returns its value. If used on an empty list, it returns `undefined`.
- `contains(value)` returns true if `value` is in the list, and false otherwise.
- `findIndex(value)` returns the index of the node first node whose value matches `value`, and it returns `-1` if `value` is not found in the list.
- `toString()` returns a string representation of the list. The format is `( value ) -> ( value ) -> null`. Returns an empty string if the list is empty.
