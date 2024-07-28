import Project from './project.js';
import toDo from './todo.js';
import displayToDos from './displayToDos';
import clearChildren from './clearChildren.js';
import reloadProjects from './reloadProjects.js';

export default function initialPageLoad() {
    const sidebarContainer = document.createElement("div");
    sidebarContainer.setAttribute("id", "sidebarContainer");

    const sidebarHeader = document.createElement("h1");
    sidebarHeader.innerText = `Your projects`;
    sidebarHeader.setAttribute("id", "sidebarHeader");
    sidebarContainer.appendChild(sidebarHeader);

    const addProject = document.createElement("button");
    addProject.setAttribute("value", "New Project");
    addProject.setAttribute("id", "addProjectButton");
    addProject.innerText = "Add Project";
    addProject.addEventListener("click", () => {
        const newProjName = prompt("Enter a name for the new project.");
        const newProj = new Project(newProjName);
        projArray.push(newProj);

        clearChildren(sidebarContainer, 2);

        projArray.forEach((element, index, array) => {
            reloadProjects(element, array, index);
        });
    });

    sidebarContainer.appendChild(addProject);

    const toDoContainer = document.createElement("div");
    toDoContainer.setAttribute("id", "toDoContainer");

    const toDoHeader = document.createElement("h1");
    toDoHeader.innerText = `Project tasks`;
    toDoHeader.setAttribute("id", "toDoHeader");
    toDoContainer.appendChild(toDoHeader);

    const projArray = new Array();

    const defaultProj = new Project("Cafe Recipes");
    const defaultProj2 = new Project("Birthdays");
    const newToDo = new toDo("Example Latte");
    newToDo.setDescription("Astral Espresso roast under a cloud of steamy milkfoam.");
    newToDo.setDueDate("19/10/24");
    newToDo.setPriority("Medium");

    const newToDo2 = new toDo("Shopping - Anne");
    newToDo2.setDescription("Anne's Wishlist: Airpods");
    newToDo2.setDueDate("30/8/24");
    newToDo2.setPriority("High");

    defaultProj.addToDo(newToDo);
    defaultProj2.addToDo(newToDo2);

    projArray.push(defaultProj);
    projArray.push(defaultProj2);

    console.log(defaultProj.getTasks()[0].description);

    const projectContainer = document.querySelector("#projectContainer");
    projectContainer.appendChild(sidebarContainer);
    projectContainer.appendChild(toDoContainer);

    displayToDos(defaultProj);

    projArray.forEach((element, index, array) => {
        reloadProjects(element, array, index);
        /* const currProjContainer = document.createElement("div");
        currProjContainer.setAttribute("id", "projSidebarContainer");

        const currProjTitle = document.createElement("h2");
        currProjTitle.setAttribute("id", "projSidebarTitle");
        currProjTitle.innerText = `${element.title}`;

        currProjContainer.appendChild(currProjTitle);
        sidebarContainer.appendChild(currProjContainer);

        currProjContainer.addEventListener("click", () => {
            console.log(displayToDos(array[index]));
        }); */
    });

};