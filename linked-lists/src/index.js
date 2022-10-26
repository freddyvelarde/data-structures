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
}

export default LinkedList;
