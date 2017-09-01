const lists = []

function addToLists(listObj) {
	listObj.id = lists.length
	lists.push(listObj)
	var node = document.createElement("Li");
	var listText = document.createTextNode(`${listObj.name}`);
	node.appendChild(listText);
	document.getElementById("task-lists").appendChild(node);
}