export default class Project {
    constructor(title) {
        this.title = title;
        this.tasks = new Array();
    }

    addToDo(todo) {
        this.tasks.push(todo);
    }

    getTasks() {
        return this.tasks;
    }
}