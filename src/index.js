import Project from './project.js';
import toDo from './todo.js';
import initialPageLoad from './initialPageLoad.js';

console.log("Test");

const newHeader = document.createElement("h3");
newHeader.innerHTML = "Test";

document.querySelector("#test").appendChild(newHeader);

const defaultProject = new Project("Default");

const newToDo = new toDo("Test Task");
newToDo.setDescription("Test description");
newToDo.setDueDate("2020-2020-2020");
newToDo.setPriority("High");

defaultProject.addToDo(newToDo);

console.log(defaultProject.getTasks()[0]);

initialPageLoad();