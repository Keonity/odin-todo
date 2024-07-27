import displayToDos from "./displayToDos";

export default class Project {
    constructor(title) {
        this.title = title;
        this.tasks = new Array();
    }

    addToDo(todo) {
        this.tasks.push(todo);
    }

    showToDos() {
        displayToDos(this);
    }

    getTasks() {
        return this.tasks;
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
    }
}