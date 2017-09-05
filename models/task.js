const Task = (function createTask(){
  const all = []
  let counter = 0

  return class Task{
    constructor(list, description, priority){
      this.id = (counter +=1)
      this.description = description
      this.priority = priority
      this.list = list
      all.push(this)
      this.list.tasks.push(this)
    }

    render() {
        return `
      <div id="task ${this.id}">
        <form id="delete-${this.id}">
         ${this.description}: ${this.priority}
        <input id='task-${this.id}' type="submit" value="X" data-type="task">

        </form>
      </div>
      `
    }

    delete(){
      let element = document.getElementById(`task ${this.id}`);
      element.parentNode.removeChild(element);
      Task.all().splice(Task.all().indexOf(this), 1)
    }


    // 
    static all(){
      return all
    }

    

  }




})()