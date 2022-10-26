import LinkedList from "./index.js";

const myList = new LinkedList();

myList.appendNewNode("Freddy Velarde");
myList.appendNewNode("Brisdenka Justidiano");
myList.appendNewNode(5);
// myList.getByIndex(1);
const items = myList.mapNodes((item) => console.log(item + 5));
// const items = [1, 2, 3, 4, "freddy"];
// const newItems = items.map((i) => console.log(i + 2));
// console.log(newItems);
// console.log(items.getAllNodes());
