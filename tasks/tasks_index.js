





document.addEventListener("DOMContentLoaded", 
	function() {
		const newListButton = 
		document.querySelector("#list-creation-button")
		// console.log(newListButton)

		const listForm = 
		document.getElementById("list-form")
		const listName = 
		document.getElementById("list-name")


		listForm.addEventListener("submit", () => {
			handleFormSubmit(listName.value)
		})


		newListButton.addEventListener("click", () => {
			listFormHandler(listName.value)
		})

})