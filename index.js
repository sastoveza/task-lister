document.addEventListener('DOMContentLoaded', function(){
  let formEl = document.getElementById('add-form');
  const parentEl = document.getElementById('all-lists')
  const taskForm = document.getElementById('task-form')

  formEl.addEventListener('submit', function(){
    event.preventDefault();

    let listName = document.getElementById('add-list');
    let list = new List(listName.value);
    // console.log(list);

    const allListsHTML = List.renderAll()
    const taskFormTemplate = list.renderForm()
    console.log(allListsHTML)

    parentEl.innerHTML = allListsHTML
    taskForm.innerHTML = taskFormTemplate
    formEl.reset();


    let formEm = document.getElementById('add-task');
    formEm.addEventListener('submit', function(){
      event.preventDefault();

      let findList = List.all().find((list) => list.id === parseInt(formEm.select_list.value))
      let task = new Task(findList, formEm.task_description.value, formEm.task_priority.value);
      console.log(task);

      const allListsHTML = List.renderAll()
      parentEl.innerHTML = allListsHTML
      formEm.reset();

    })
  })

  let container = document.getElementById('container')
	container.addEventListener('click', function(){
		if (event.target.value === 'X') {
			if(event.target.dataset.type === "list"){
					event.preventDefault();
					let toDelete = List.all().find((list) => list.id === parseInt(event.target.dataset.listId))
					console.log(event.target.dataset);
					// debugger;
					toDelete.delete();

					const allListsHTML = List.renderAll()
					parentEl.innerHTML = allListsHTML
					if (List.all().length > 0){
						taskForm.innerHTML = List.all().map(list => list.renderForm())
					} else {
						taskForm.innerHTML = ""
					}
				}else if(event.target.dataset.type === "task"){
					event.preventDefault();
					// debugger;
					console.log(event.target.dataset)
					let toDelete = Task.all().find((task) => task.id === parseInt(event.target.id.split("-")[1]))
					toDelete.delete();

					

				}
			}
		})
})