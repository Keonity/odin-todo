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
                let deleted = false;

                const currTaskContainer = document.createElement("div");
                currTaskContainer.setAttribute("class", "taskContainer");
                currTaskContainer.setAttribute("id", `${element.title}`);
        
                const currTaskTitle = document.createElement("h3");
                currTaskTitle.setAttribute("class", "taskTitle");
                currTaskTitle.innerHTML = `${element.title}`;
        
                const currTaskDueDate = document.createElement("h3");
                currTaskDueDate.setAttribute("class", "taskDueDate");
                currTaskDueDate.innerHTML = `${element.dueDate}`;
        
                const currTaskExpand = document.createElement("button");
                currTaskExpand.setAttribute("class", "taskExpand");
                currTaskExpand.innerHTML = `Show Details`;
    
                const currTaskDelete = document.createElement("button");
                currTaskDelete.setAttribute("class", "taskDelete");
                currTaskDelete.innerHTML = `Delete Task`;
                currTaskDelete.addEventListener("click", () => {
                    array.splice(index, 1);
                    const deletingElement = document.getElementById(`${element.title}`);
                    deletingElement.remove();
                });
            
                currTaskContainer.appendChild(currTaskTitle);
                currTaskContainer.appendChild(currTaskDueDate);
                currTaskContainer.appendChild(currTaskExpand);
                currTaskContainer.appendChild(currTaskDelete);
        
                toDoContainer.appendChild(currTaskContainer);  
            });
        });
        toDoContainer.appendChild(addTask);
    
        project.getTasks().forEach((element, index, array) => {
            const currTaskContainer = document.createElement("div");
            currTaskContainer.setAttribute("class", "taskContainer");
            currTaskContainer.setAttribute("id", `${element.title}`);
    
            const currTaskTitle = document.createElement("h3");
            currTaskTitle.setAttribute("class", "taskTitle");
            currTaskTitle.innerHTML = `${element.title}`;
    
            const currTaskDueDate = document.createElement("h3");
            currTaskDueDate.setAttribute("class", "taskDueDate");
            currTaskDueDate.innerHTML = `${element.dueDate}`;
    
            const currTaskExpand = document.createElement("button");
            currTaskExpand.setAttribute("class", "taskExpand");
            currTaskExpand.innerHTML = `Show Details`;

            const currTaskDelete = document.createElement("button");
            currTaskDelete.setAttribute("class", "taskDelete");
            currTaskDelete.innerHTML = `Delete Task`;
            currTaskDelete.addEventListener("click", () => {
                array.splice(index, 1);
                const deletingElement = document.getElementById(`${element.title}`);
                deletingElement.remove();
            });
        
            currTaskContainer.appendChild(currTaskTitle);
            currTaskContainer.appendChild(currTaskDueDate);
            currTaskContainer.appendChild(currTaskExpand);
            currTaskContainer.appendChild(currTaskDelete);
    
            toDoContainer.appendChild(currTaskContainer);  
        });
    
    }
    
    return project;
}