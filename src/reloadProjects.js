import displayToDos from "./displayToDos";
import Project from "./project";

export default function reloadProjects(element, index, array) {
    const currProjContainer = document.createElement("div");
    currProjContainer.setAttribute("id", "projSidebarContainer");

    const currProjTitle = document.createElement("h2");
    currProjTitle.setAttribute("id", "projSidebarTitle");
    currProjTitle.innerText = `${element.title}`;

    currProjContainer.appendChild(currProjTitle);
    sidebarContainer.appendChild(currProjContainer);

    currProjContainer.addEventListener("click", () => {
        element.showToDos();

        /* console.log(element.showToDos());
        console.log(element); */
    });
};