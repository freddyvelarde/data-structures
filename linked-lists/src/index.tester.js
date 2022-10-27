import LinkedList from "./index.js";

const myList = new LinkedList();

myList.appendNewNode("Freddy Velarde");
myList.appendNewNode("Brisdenka Justidiano");
myList.appendNewNode(5);
myList.appendNewNode("Last item");
myList.appendNewNode("Last item");
// myList.insertAtHead("Head");
// myList.insertAtHead("Erick");
// myList.getByIndex(1);
// const items = myList.filterNodes((item) => item === 5);
// console.log(items.getAllNodes());
// const items = [1, 2, 3, 4, "freddy"];
// const newItems = items.map((i) => console.log(i + 2));
// console.log(newItems);
myList.insertAt(2, "Index 2");
myList.removeFrom(4);
console.log(myList.getAllNodes());
// console.log(myList.findNode((item) => item === "Last item"));
