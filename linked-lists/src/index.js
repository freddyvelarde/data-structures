import Node from "./node.js";

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  appendNewNode(value) {
    let currentNode = this.head;
    const newNode = new Node(value);
    if (!currentNode) return (this.head = newNode);
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  size() {
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  }

  getAllNodes() {
    let currentNode = this.head;
    const nodes = [];
    if (!currentNode) return nodes;
    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  removeLastNode() {
    if (!this.head) return;
    if (!this.head.next) this.head = null;
    let prevNode = this.head;
    let nextNode = this.head.next;
    while (nextNode.next) {
      prevNode = nextNode;
      nextNode = nextNode.next;
    }
    prevNode.next = null;
  }

  getByIndex(index) {
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentIndex === index) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return null;
  }

  clear() {
    this.head = null;
  }

  mapNodes(callback) {
    if (typeof callback !== "function") {
      return console.log(
        new Error(
          `yourLinkedList.mapNodes() must be a function and not ${typeof callback} `
        )
      );
    }

    let currentNode = this.head;
    const newLinkedList = new LinkedList();
    while (currentNode) {
      newLinkedList.appendNewNode(callback(currentNode.value));
      currentNode = currentNode.next;
    }
    return newLinkedList;
  }

  filterNodes(callback) {
    if (typeof callback !== "function") {
      return console.log(
        new Error(
          `yourLinkedList.filterNodes() must be a function and not ${typeof callback}`
        )
      );
    }

    let currentNode = this.head;
    const newLinkedList = new LinkedList();
    while (currentNode) {
      if (callback(currentNode.value)) {
        newLinkedList.appendNewNode(currentNode.value);
      }
      currentNode = currentNode.next;
    }
    return newLinkedList;
  }

  insertAtHead(value) {
    const newNode = new Node(value);
    let nextNode = this.head;
    this.head = newNode;
    newNode.next = nextNode;
  }

  getFirst() {
    return this.head.value;
  }

  getLast() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  findNode(callback) {
    if (typeof callback !== "function") {
      return console.log(
        new Error(
          `yourLinkedList.findNode() must be a function and not ${typeof callback}`
        )
      );
    }
    let currentNode = this.head;

    while (currentNode) {
      if (callback(currentNode.value)) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
  }

  insertAt(index, value) {
    let node = this.head;
    const newNode = new Node(value);
    if (index == 0) {
      newNode.next = node;
      this.head = newNode;
      return;
    }
    while (--index) {
      if (node.next !== null) node = node.next;
      else throw Error("Index Out of Bound");
    }
    let tempVal = node.next;
    node.next = newNode;
    newNode.next = tempVal;
  }

  removeFrom(index) {
    let node = this.head;
    if (index === 0) {
      if (node !== null) {
        node = node.next;
        this.head = node;
      } else throw Error("Index Out of Bound");

      return;
    }
    while (--index) {
      if (node.next !== null) node = node.next;
      else throw Error("Index Out of Bound");
    }
    node.next = node.next.next;
  }
}

export default LinkedList;
