import Project from './project.js';
import toDo from './todo.js';
import displayToDos from './displayToDos';

export default function initialPageLoad() {
    const sidebarContainer = document.createElement("div");
    sidebarContainer.setAttribute("id", "sidebarContainer");

    const sidebarHeader = document.createElement("h1");
    sidebarHeader.innerText = `Your projects`;
    sidebarHeader.setAttribute("id", "sidebarHeader");
    sidebarContainer.appendChild(sidebarHeader);

    const toDoContainer = document.createElement("div");
    toDoContainer.setAttribute("id", "toDoContainer");


    const toDoHeader = document.createElement("h1");
    toDoHeader.innerText = `Project tasks`;
    toDoHeader.setAttribute("id", "toDoHeader");
    toDoContainer.appendChild(toDoHeader);

    const projArray = new Array();

    const defaultProj = new Project("Default");
    const defaultProj2 = new Project("Default 2");
    const newToDo = new toDo("Make a task like me!");
    newToDo.setDescription("Test description");
    newToDo.setDueDate("2020-2020-2020");
    newToDo.setPriority("High");

    const newToDo2 = new toDo("Cosmic");
    newToDo2.setDescription("Cosmic description");
    newToDo2.setDueDate("1999-01-31");
    newToDo2.setPriority("High");

    defaultProj.addToDo(newToDo);
    defaultProj.addToDo(newToDo2);

    projArray.push(defaultProj);
    projArray.push(defaultProj2);

    console.log(defaultProj.getTasks()[0].description);

    const projectContainer = document.querySelector("#projectContainer");
    projectContainer.appendChild(sidebarContainer);
    projectContainer.appendChild(toDoContainer);

    displayToDos(defaultProj);

    /* defaultProj.getTasks().forEach((element, index, array) => {
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
    }) */

    projArray.forEach((element, index, array) => {
        const currProjContainer = document.createElement("div");
        currProjContainer.setAttribute("id", "projSidebarContainer");

        const currProjTitle = document.createElement("h2");
        currProjTitle.setAttribute("id", "projSidebarTitle");
        currProjTitle.innerText = `${element.title}`;

        currProjContainer.appendChild(currProjTitle);
        sidebarContainer.appendChild(currProjContainer);

        currProjContainer.addEventListener("click", () => {
            // console.log(array[index]);
            displayToDos(array[index]);
        });
    })

}