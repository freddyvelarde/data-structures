# Linked-list-js

linked lists are a data structure which will have various benefits.

1. Linked lists are very efficient when inserting and deleting data. This is because there is no need to shift any elements over, as is the case with arrays.

2. Linked lists can be easily extended and can be made into a circular linked list if needed.

3. Linked lists use less memory than arrays because they only need to store the data and the link to the next element, as opposed to the whole array.

4. Linked lists are very flexible and can be used to implement other data structures, such as stacks and queues.

## installation

```shell
# With npm
npm i @fredvel/linked-list-js

# or yarn

yarn add @fredvel/linked-list-js
```

## DISCLAIMER!!

This library only works on "modules" and not on "commonjs"

## How to use Linked-list-js?

To use this library it is pretty easy!

```js
import LinkedList from "@fredvel/linked-list-js";

const mylist = new LinkedList();
```

# Methods

Add new element

```js
const myList = new LinkedList();

myList.appendNewNode(value);
```

Get the length of the linked list

```js
const myList = new LinkedList();

myList.size();
```

Get All nodes, this method returns an array with all nodes inside

```js
const myList = new LinkedList();

myList.getAllNodes();
```

Remove the last element, like Array.pop();

```js
const myList = new LinkedList();

myList.removeLastNode();
```

Get a node by index

```js
const myList = new LinkedList();

myList.getByIndex(index);
```

To Clear all linked list an remove all nodes

```js
const myList = new LinkedList();

myList.clear();
```

This method insert an element at the very first place in linked list, like Array.unshift()

```js
const myList = new LinkedList();

myList.insertAtHead(value);
```

To get the first element in the linked list

```js
const myList = new LinkedList();
myList.getFirst();
```

To get the last element in the linked list

```js
const myList = new LinkedList();

myList.getLast();
```

Method to add an element by index

```js
const myList = new LinkedList();

myList.insertAt(index, value);
```

Method to remove an element by index

```js
const myList = new LinkedList();

myList.removeFrom(index);
```

## Array Methods clone:

FindNode() method returns a simple value but with the first match of the callback.

```js
const myList = new LinkedList();
myList.appendNewNode("value1");
myList.appendNewNode("value2");
myList.appendNewNode("value3");

const findLinkedList = myList.findNode((item) => item === "value2");
console.log(findLinkedList); // value2
```

MapNode() method returns another linked list.

```js
const myList = new LinkedList();
myList.appendNewNode("value1");
myList.appendNewNode("value2");

const findLinkedList = myList.mapNode((item) => item + "test");
console.log(findLinkedList.getAllNodes()); // ["value1test", "value2test"]
```

filterNodes() method returns a linked list but with the matches of the callback

```js
const myList = new LinkedList();
myList.appendNewNode(1);
myList.appendNewNode(2);
myList.appendNewNode(3);
myList.appendNewNode(4);
myList.appendNewNode(5);

const newLinkedListMapped = myList.filterNodes((num) => num > 2);
console.log(newLinkedListMapped.getAllNodes()); // [3,4,5]
```
