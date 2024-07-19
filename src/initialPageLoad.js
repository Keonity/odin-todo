import Project from './project.js';
import toDo from './todo.js';

export default function initialPageLoad() {
    const sidebarContainer = document.createElement("div");
    sidebarContainer.setAttribute("id", "sidebarContainer");

    const defaultProj = new Project("Default");
    const newToDo = new toDo("Make a task like me!");
    newToDo.setDescription("Test description");
    newToDo.setDueDate("2020-2020-2020");
    newToDo.setPriority("High");

    defaultProj.addToDo(newToDo);

    console.log(defaultProj.getTasks()[0].description);

    /* defaultProj.getTasks().forEach(array, index, element) => {

    } */
}