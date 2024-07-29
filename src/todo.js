export default class toDo {
    constructor(title) {
        this.title = title;
        this.description = "";
        this.dueDate = "";
        this.priority = "";
    }

    setTitle(title) {
        this.title = title;
    }

    setDescription(description) {
        this.description = description;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    getTitle() {
        return this.title;
    }
    
    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    static restore(tasks) {
        const newToDo = new toDo(tasks.title);
        /* console.log(tasks.description);
        console.log(tasks.dueDate);
        console.log(tasks.priority); */
        newToDo.description = tasks.description;
        newToDo.dueDate = tasks.dueDate;
        newToDo.priority = tasks.priority;

        return newToDo;
    }
}