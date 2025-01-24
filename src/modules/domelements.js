import listIcon from "../assets/icons/pound.svg";
import { lists } from "./todo";

function addListsToSidebar() {
    const listCtn = document.querySelector(".list-ctn");

    for (item in lists) {
        const allTask = document.createElement("div");
        allTask.classList.add("list-tag");
        allTask.innerHTML = listIcon;
        allTask.textContent = `${item}`;
        listCtn.appendChild(allTask);
    };
};

export { addListsToSidebar };