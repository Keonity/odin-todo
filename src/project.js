import displayToDos from "./displayToDos";
import toDo from "./todo";

export default class Project {
    constructor(title) {
        this.title = title;
        this.tasks = new Array();
    }

    static restore(title, proj) {
        console.log(proj);
        const newProj = new Project(title);
        console.log(`Project Tasks:`);
        console.log(proj.tasks);
        newProj.setTasks(proj.tasks);
        return newProj;
    }

    addToDo(todo) {
        this.tasks.push(todo);
    }

    showToDos() {
        displayToDos(this);
    }
    
    getTitle() {
        return this.title;
    }

    getTasks() {
        return this.tasks;
    }

    setTasks(toDos) {
        this.tasks = new Array();
        for (let i = 0; i < toDos.length; i++) {
            const newToDo = toDo.restore(toDos[i]);
            this.addToDo(newToDo);
        }
        // this.tasks = toDos;
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
    }
}