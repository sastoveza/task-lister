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

    static all(){
      return all
    }

    render(){
      return `
        <li id="${this.id}">
          ${this.description}: ${this.priority}
        </li>
      `
    }
  }
})()