import listIcon from "../assets/icons/pound-icon.svg";
import prioIcon from "../assets/icons/alert-circle.svg";
import deleteIcon from "../assets/icons/delete-circle.svg";
import { lists } from "./todo.js";

function addListsToSidebar() {
    const listCtn = document.querySelector(".list-ctn");
    listCtn.innerHTML = "";

    Object.keys(lists).forEach(item => {
        const alltodo = document.createElement("div");
        alltodo.classList.add("list-tag");
        alltodo.innerHTML = listIcon;

        const text = document.createElement("div");
        text.classList.add("list-text");
        text.textContent = `${item}`;

        alltodo.appendChild(text);
        if (item !== "All ToDos") {
            const delIcon = document.createElement("button");
            delIcon.classList.add("delete-btn");
            delIcon.innerHTML = deleteIcon;
            delIcon.dataset.list = item;

            alltodo.appendChild(delIcon);
        };

        listCtn.appendChild(alltodo);
    });
};

function dispTodo(todo) {
    const disp = document.querySelector(".content");
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
    prio.classList.add("priority-ctn");
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

    const dltBtn = document.createElement("button");
    dltBtn.classList.add("delete-btn");
    dltBtn.innerHTML = deleteIcon;
    dltBtn.dataset.title = todo.title;

    sub.appendChild(check);
    sub.appendChild(title);
    sub.appendChild(dateInd);
    sub.appendChild(prio);
    sub.appendChild(dltBtn);

    todoE.appendChild(sub);

    disp.appendChild(todoE);
};

function displaySavedTodos() {
    const disp = document.querySelector(".content");
    disp.innerHTML = "";

    // const cHeader = document.querySelector(".list-header");
    // cHeader.textContent = "";
    // const cHeadTtle = document.createElement("div");
    // const cHeadImg = document.createElement("div");
    // cHeadImg.innerHTML = listIcon;
    // cHeadImg.classList.add("lheader-icon");
    // const cHeadTxt = document.createElement("h2");
    // cHeadTxt.textContent = "All ToDos";
    // cHeadTxt.style.cssText = "font-family: 'Outfit';"
    // cHeadTtle.appendChild(cHeadImg);
    // cHeadTtle.appendChild(cHeadTxt);

    // cHeader.appendChild(cHeadTtle);

    Object.entries(lists).forEach(([_, todos]) => {
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
            prio.classList.add("priority-ctn");
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

            const dltBtn = document.createElement("button");
            dltBtn.classList.add("delete-btn");
            dltBtn.innerHTML = deleteIcon;
            dltBtn.dataset.title = todo.title;

            sub.appendChild(check);
            sub.appendChild(title);
            sub.appendChild(dateInd);
            sub.appendChild(prio);
            sub.appendChild(dltBtn);

            todoE.appendChild(sub);
            disp.appendChild(todoE);
        });
    });
};

export { addListsToSidebar, dispTodo, displaySavedTodos };