const List = (function createListClass(){
  const all = []
  let counter = 0

  return class List{
    constructor(name){
      this.name = name
      this.id = (counter +=1)
      all.push(this)
      this.tasks = []
    }

    render(){
      const tasks = this.tasks.map((task) => task.render()).join("")
      return `
      <div id="list-tasks">
        <form id="delete-${this.id}">
        <h5>${this.name}</h5>
        <input data-list-id='${this.id}' type="submit" value="X">
        <ul>
          ${tasks}
        </ul>
        </form>
      </div>
      `
    }

    delete(){
      List.all().splice(List.all().indexOf(this), 1)
    }


    static renderAll(){
      const listsHTML = this.all().map(list => list.render()).join("")
      // debugger
      if (List.all().length > 0){
        return `
          <div>
            ${listsHTML}
          </div>
        `
      }else{
        return ""
      }

    }

    static all(){
      return all
    }

    renderForm(){
      let options = List.all().map(list => {
        return `
        <option value=${list.id}>${list.name}</option>
        `
      })
      console.log(options)


      if (List.all().length > 0){
        return `
          <form id="add-task">
            <label for='select_list'>Select List:</label>
            <select id="select_list" name="select_list">
            ${options.join("")}
            </select><br>
            <label for="task_description">Task description:</label>
            <input type="text" name="task_description" id="task_description" placeholder="description"><br>
            <label for="task_priority">Priority level:</label>
            <input type="text" id="task_priority" name="task_priority" placeholder="priority"><br>
            <input type="submit" value="add (+)">
          </form>
        `
      } else {
        return ""
      }
    }
  }
})()