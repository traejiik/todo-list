import listIcon from "../assets/icons/pound-icon.svg";
import prioIcon from "../assets/icons/exclam.svg"
import { lists } from "./todo.js";

function addListsToSidebar() {
    const listCtn = document.querySelector(".list-ctn");
    listCtn.innerHTML = "";

    Object.keys(lists).forEach(item => {
        const allTask = document.createElement("div");
        allTask.classList.add("list-tag");
        allTask.innerHTML = listIcon;

        const text = document.createElement("div");
        text.classList.add("list-text");
        text.textContent = `${item}`;

        allTask.appendChild(text);
        listCtn.appendChild(allTask);
    });
};

function dispTodo(task) {
    const disp = document.querySelector(".content");
    const todo = document.createElement("div");
    todo.classList.add("todo-card");

    const sub = document.createElement("div");
    sub.classList.add("card-sub");

    const check = document.createElement("input");
    check.type = "checkbox";
    check.classList.add("checkbox");
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

    const dateInd = document.createElement("div");
    dateInd.classList.add("date-ind");
    dateInd.textContent = task.dueDate;

    sub.appendChild(check);
    sub.appendChild(title);
    sub.appendChild(dateInd);
    sub.appendChild(prio);

    todo.appendChild(sub);

    disp.appendChild(todo);
};

function displaySavedTodos() {
    const disp = document.querySelector(".content");

    disp.innerHTML = "";

    Object.entries(lists).forEach(([listName, todos]) => {

        todos.forEach(todo => {
            const todoE = document.createElement("div");
            todoE.classList.add("todo-card");

            const sub = document.createElement("div");
            sub.classList.add("card-sub");

            const check = document.createElement("input");
            check.type = "checkbox";
            check.classList.add("checkbox");
            const title = document.createElement("h3");
            title.textContent = todo.title;
            const prio = document.createElement("div");
            prio.innerHTML = prioIcon;
            const prioSvg = prio.querySelector("svg");

            if (todo.priority === "high") {
                prioSvg.style.fill = "red";
            } else if (todo.priority === "medium") {
                prioSvg.style.fill = "orange";
            } else {
                prioSvg.style.fill = "green";
            }

            const dateInd = document.createElement("div");
            dateInd.classList.add("date-ind");
            dateInd.textContent = todo.dueDate;

            sub.appendChild(check);
            sub.appendChild(title);
            sub.appendChild(dateInd);
            sub.appendChild(prio);

            todoE.appendChild(sub);
            disp.appendChild(todoE);
        });
    });
};

export { addListsToSidebar, dispTodo, displaySavedTodos };