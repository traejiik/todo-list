import listIcon from "../assets/icons/pound.svg";
import prioIcon from "../assets/icons/exclam.svg"
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

function dispTodo(task) {
    const disp = document.querySelector(".content");
    const todo = document.createElement("div");
    todo.classList.add("todo-card");

    const sub1 = document.createElement("div");
    const sub2 = document.createElement("div");

    const check = document.createElement("input");
    check.type = "checkbox";
    const title = document.createElement("h3");
    title.textContent = task.title;
    const prio = document.createElement("div");
    prio.innerHTML = prioIcon;
    const prioSvg = prio.querySelector("svg");

    if (task.priority === "high") {
        prioSvg.style.fill = "red";
    } else if (task.priority === "medium") {
        prioSvg.style.fill = "orange";
    } else {
        prioSvg.style.fill = "green";
    }
    
    const listInd = document.createElement("div");
    listInd.innerHTML = listIcon;
    listInd.textContent = task.list;
    const dateInd = document.createElement("div");
    dateInd.textContent = task.dueDate;

    sub1.appendChild(check);
    sub1.appendChild(title);
    sub1.appendChild(prio);

    sub2.appendChild(listInd);
    sub2.appendChild(dateInd);

    todo.appendChild(sub1);
    todo.appendChild(sub2);

    disp.appendChild(todo);
};

export { addListsToSidebar, dispTodo };