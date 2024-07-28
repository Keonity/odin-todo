import toDo from './todo.js';
import clearChildren from './clearChildren.js';

function displayTasks(toDoContainer, element, index, array) {
    console.log(element);
    console.log(toDoContainer);
    const toDoContainerA = toDoContainer;
    console.log(toDoContainerA);
    const currTaskContainer = document.createElement("div");
    currTaskContainer.setAttribute("class", "taskContainer");
    currTaskContainer.setAttribute("id", `${element.title}`);
    console.log(currTaskContainer);

    const currTaskTitle = document.createElement("input");
    currTaskTitle.setAttribute("type", "text");
    currTaskTitle.setAttribute("class", "taskTitle");
    currTaskTitle.setAttribute("value", `${element.title}`);
    currTaskTitle.addEventListener("change", (event) => {
        element.setTitle(event.target.value);
    });

    const currTaskDueDate = document.createElement("input");
    currTaskDueDate.setAttribute("type", "text");
    currTaskDueDate.setAttribute("class", "taskDueDate");
    currTaskDueDate.setAttribute("value", `${element.dueDate}`);
    currTaskDueDate.addEventListener("change", (event) => {
        element.setDueDate(event.target.value);
    });

    const currTaskExpand = document.createElement("button");
    currTaskExpand.setAttribute("class", "taskExpand");
    currTaskExpand.innerHTML = `Show Details`;
    currTaskExpand.addEventListener("click", () => {
        const currTaskDesc = document.createElement("input");
        currTaskDesc.setAttribute("type", "text");
        currTaskDesc.setAttribute("class", "taskDescription");
        currTaskDesc.setAttribute("value", `${element.description}`);
        currTaskDesc.addEventListener("change", (event) => {
            element.setDescription(event.target.value);
        });

        const currTaskPriority = document.createElement("input");
        currTaskPriority.setAttribute("type", "text"); 
        currTaskPriority.setAttribute("class", "taskPriority");
        currTaskPriority.setAttribute("value", `${element.priority}`);
        currTaskPriority.addEventListener("change", (event) => {
            element.setPriority(event.target.value);
        });

        currTaskContainer.insertBefore(currTaskDesc, currTaskExpand);
        currTaskContainer.insertBefore(currTaskPriority, currTaskExpand); 

        const currTaskHide = document.createElement("button");
        currTaskHide.innerHTML = `Hide Details`;
        currTaskHide.setAttribute("class", "taskHide");
        currTaskHide.addEventListener("click", () => {
            currTaskDesc.remove();
            currTaskPriority.remove();
            currTaskContainer.insertBefore(currTaskExpand, currTaskDelete);
            currTaskHide.remove();
        })
        currTaskContainer.insertBefore(currTaskHide, currTaskExpand);
        currTaskExpand.remove();

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

        toDoContainerA.appendChild(currTaskContainer);

        // currTaskExpand.style.visibility = 'hidden';
    });
};

export default function displayToDos(project) {
    const toDoContainer = document.querySelector("#toDoContainer");

    if (toDoContainer) {
        clearChildren(toDoContainer, 1);

        const addTask = document.createElement("button");
        addTask.setAttribute("id", "addTaskButton");
        addTask.innerText = "Add New Task";
        addTask.addEventListener("click", () => {
            const newTaskName = prompt("Enter a name for the new task.");
            const newTask = new toDo(newTaskName);
            project.addToDo(newTask);

            clearChildren(toDoContainer, 2);

            /* while (toDoContainer.childElementCount > 2) {
                toDoContainer.removeChild(toDoContainer.lastChild);
            } */

            (project.getTasks()).forEach((element, index, array) => {
                const currTaskContainer = document.createElement("div");
                currTaskContainer.setAttribute("class", "taskContainer");
                currTaskContainer.setAttribute("id", `${element.title}`);
        
                const currTaskTitle = document.createElement("input");
                currTaskTitle.setAttribute("type", "text");
                currTaskTitle.setAttribute("class", "taskTitle");
                currTaskTitle.setAttribute("value", `${element.title}`);
                currTaskTitle.addEventListener("change", (event) => {
                    element.setTitle(event.target.value);
                });
        
                const currTaskDueDate = document.createElement("input");
                currTaskDueDate.setAttribute("type", "text");
                currTaskDueDate.setAttribute("class", "taskDueDate");
                currTaskDueDate.setAttribute("value", `${element.dueDate}`);
                currTaskDueDate.addEventListener("change", (event) => {
                    element.setDueDate(event.target.value);
                })
        
                const currTaskExpand = document.createElement("button");
                currTaskExpand.setAttribute("class", "taskExpand");
                currTaskExpand.innerHTML = `Show Details`;
                currTaskExpand.addEventListener("click", () => {
                    const currTaskDesc = document.createElement("input");
                    currTaskDesc.setAttribute("type", "text");
                    currTaskDesc.setAttribute("class", "taskDescription");
                    currTaskDesc.setAttribute("value", `${element.description}`);
                    currTaskDesc.addEventListener("change", (event) => {
                        element.setDescription(event.target.value);
                    });
    
                    const currTaskPriority = document.createElement("input");
                    currTaskPriority.setAttribute("type", "text"); 
                    currTaskPriority.setAttribute("class", "taskPriority");
                    currTaskPriority.setAttribute("value", `${element.priority}`);
                    currTaskPriority.addEventListener("change", (event) => {
                        element.setPriority(event.target.value);
                    });
    
                    currTaskContainer.insertBefore(currTaskDesc, currTaskExpand);
                    currTaskContainer.insertBefore(currTaskPriority, currTaskExpand); 
    
                    const currTaskHide = document.createElement("button");
                    currTaskHide.innerHTML = `Hide Details`;
                    currTaskHide.setAttribute("class", "taskHide");
                    currTaskHide.addEventListener("click", () => {
                        currTaskDesc.remove();
                        currTaskPriority.remove();
                        currTaskContainer.insertBefore(currTaskExpand, currTaskDelete);
                        currTaskHide.remove();
                    })
                    currTaskContainer.insertBefore(currTaskHide, currTaskExpand);
                    currTaskExpand.remove();
    
                    // currTaskExpand.style.visibility = 'hidden';
                });
    
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

                // displayTasks(toDoContainer, element, index, array);
            }); 
        });
        toDoContainer.appendChild(addTask);
    
        (project.getTasks()).forEach((element, index, array) => {
            const currTaskContainer = document.createElement("div");
            currTaskContainer.setAttribute("class", "taskContainer");
            currTaskContainer.setAttribute("id", `${element.title}`);
    
            const currTaskTitle = document.createElement("input");
            currTaskTitle.setAttribute("type", "text");
            currTaskTitle.setAttribute("class", "taskTitle");
            currTaskTitle.setAttribute("value", `${element.title}`);
            currTaskTitle.addEventListener("change", (event) => {
                element.setTitle(event.target.value);
            });
    
            const currTaskDueDate = document.createElement("input");
            currTaskDueDate.setAttribute("type", "text");
            currTaskDueDate.setAttribute("class", "taskDueDate");
            currTaskDueDate.setAttribute("value", `${element.dueDate}`);
            currTaskDueDate.addEventListener("change", (event) => {
                element.setDueDate(event.target.value);
            })
    
            const currTaskExpand = document.createElement("button");
            currTaskExpand.setAttribute("class", "taskExpand");
            currTaskExpand.innerHTML = `Show Details`;
            currTaskExpand.addEventListener("click", () => {
                const currTaskDesc = document.createElement("input");
                currTaskDesc.setAttribute("type", "text");
                currTaskDesc.setAttribute("class", "taskDescription");
                currTaskDesc.setAttribute("value", `${element.description}`);
                currTaskDesc.addEventListener("change", (event) => {
                    element.setDescription(event.target.value);
                });

                const currTaskPriority = document.createElement("input");
                currTaskPriority.setAttribute("type", "text"); 
                currTaskPriority.setAttribute("class", "taskPriority");
                currTaskPriority.setAttribute("value", `${element.priority}`);
                currTaskPriority.addEventListener("change", (event) => {
                    element.setPriority(event.target.value);
                });

                currTaskContainer.insertBefore(currTaskDesc, currTaskExpand);
                currTaskContainer.insertBefore(currTaskPriority, currTaskExpand); 

                const currTaskHide = document.createElement("button");
                currTaskHide.innerHTML = `Hide Details`;
                currTaskHide.setAttribute("class", "taskHide");
                currTaskHide.addEventListener("click", () => {
                    currTaskDesc.remove();
                    currTaskPriority.remove();
                    currTaskContainer.insertBefore(currTaskExpand, currTaskDelete);
                    currTaskHide.remove();
                })
                currTaskContainer.insertBefore(currTaskHide, currTaskExpand);
                currTaskExpand.remove();

                // currTaskExpand.style.visibility = 'hidden';
            }); 

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

            // displayTasks(toDoContainer, element, index, array);
        });
    
    }
    
    return project;
}