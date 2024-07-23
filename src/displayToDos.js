import toDo from './todo.js';

export default function displayToDos(project) {
    const toDoContainer = document.querySelector("#toDoContainer");

    if (toDoContainer) {
        while (toDoContainer.childElementCount > 1) {
            toDoContainer.removeChild(toDoContainer.lastChild);
        }

        const addTask = document.createElement("button");
        addTask.setAttribute("id", "addTaskButton");
        addTask.innerText = "Add New Task";
        addTask.addEventListener("click", () => {
            const newTaskName = prompt("Enter a name for the new task.");
            const newTask = new toDo(newTaskName);
            project.addToDo(newTask);

            while (toDoContainer.childElementCount > 2) {
                toDoContainer.removeChild(toDoContainer.lastChild);
            }
            project.getTasks().forEach((element, index, array) => {
                const currTaskContainer = document.createElement("div");
                currTaskContainer.setAttribute("id", "taskContainer");
        
                const currTaskTitle = document.createElement("h3");
                currTaskTitle.setAttribute("id", "taskTitle");
                currTaskTitle.innerHTML = `${element.title}`;
        
                const currTaskDueDate = document.createElement("h3");
                currTaskDueDate.setAttribute("id", "taskDueDate");
                currTaskDueDate.innerHTML = `${element.dueDate}`;
        
                currTaskContainer.appendChild(currTaskTitle);
                currTaskContainer.appendChild(currTaskDueDate);
        
                toDoContainer.appendChild(currTaskContainer);  
            });
        });
        toDoContainer.appendChild(addTask);
    
        project.getTasks().forEach((element, index, array) => {
            const currTaskContainer = document.createElement("div");
            currTaskContainer.setAttribute("id", "taskContainer");
    
            const currTaskTitle = document.createElement("h3");
            currTaskTitle.setAttribute("id", "taskTitle");
            currTaskTitle.innerHTML = `${element.title}`;
    
            const currTaskDueDate = document.createElement("h3");
            currTaskDueDate.setAttribute("id", "taskDueDate");
            currTaskDueDate.innerHTML = `${element.dueDate}`;
    
            currTaskContainer.appendChild(currTaskTitle);
            currTaskContainer.appendChild(currTaskDueDate);
    
            toDoContainer.appendChild(currTaskContainer);  
        });
    
    }
    
    return project;
}