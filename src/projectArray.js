export default function displayProjects(projectArray) {
    const sidebarContainer = document.querySelector("sidebarContainer");
    projectArray.forEach((element, index, array) => {
        const currProjContainer = document.createElement("div");
        currProjContainer.setAttribute("id", "projSidebarContainer");

        const currProjTitle = document.createElement("h2");
        currProjTitle.setAttribute("id", "projSidebarTitle");
        currProjTitle.innerText = `${element.title}`;

        currProjContainer.appendChild(currProjTitle);
        sidebarContainer.appendChild(currProjContainer);

        currProjContainer.addEventListener("click", () => {
            // console.log(array[index]);
            console.log(displayToDos(array[index]));
        });
    });
};