function listFormHandler(listName) {
	console.log(listName)
	event.preventDefault()
	let list = {
		name: `${listName}`
	}

	addToLists(list)
}