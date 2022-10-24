import Node from './node.js';

class LinkedList {
	constructor(head) {
		this.head = head;
	}
	
	appendNewNode(value) {
		let currentNode = this.head; 
		const newNode = new Node(value);
		if (!currentNode) return this.head = newNode;
		while (currentNode.next) {
			currentNode = currentNode.next
		}
		currentNode.next = newNode;
	}
	
	size() {
		let currentNode = this.head;
		let counter = 0
		while (currentNode) {
			counter++
			currentNode = currentNode.next;
		}
		return counter
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
		let currentNode = this.head;
		
		while(currentNode.next) {
			currentNode = currentNode.next;
		}
		// currentNode = null
		// this.head = currentNode;
		console.log(currentNode);
	}

	getByIndex(index) {
		let currentIndex = 0;
		let currentNode = this.head;
		while (currentNode !== null) {
			if (currentIndex === index) {
				return currentNode.value
			}
			currentNode = currentNode.next;
			currentIndex++
		}
		return null
	}

	clear() {
		this.head = null
	}

}


const myList = new LinkedList();

myList.appendNewNode('freddy')
myList.appendNewNode('Erick')
myList.appendNewNode('Velarde')

console.log(myList.getByIndex(-1));

// myList.removeLastNode()
// console.log(myList.getAllNodes());
