import "./styles.css";
import { toDo, lists, createListTodo, newList, defaultList } from "./modules/todo.js";
import { addListsToSidebar, dispTodo, displaySavedTodos } from "./modules/dom.js";

// Local Storage
function saveToStorage() {
    localStorage.setItem("lists", JSON.stringify(lists));
};

// Functionality
function addTodo() {
    const addTodoBtn = document.querySelector(".add-todo");
    const diaLog = document.querySelector(".input-todo");
    const formD = document.getElementById("fancy-form");
    const submitBtn = document.querySelector(".todo-add");
    const closeBtn = document.querySelector(".todo-close");
    const title = document.querySelector("#title");
    const list = document.querySelector("#list");
    const prio = document.querySelector("#prio");
    const dateIn = document.querySelector("#date-in");

    addTodoBtn.addEventListener("click", () => {
        diaLog.showModal();
    });

    closeBtn.addEventListener("click", (event) => {
        event.preventDefault();
        diaLog.close()
    })

    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if (list.value === "") {
            let todo = new toDo(title.value, prio.value, dateIn.value);
            defaultList(todo);
            saveToStorage();
            addListsToSidebar();
            dispTodo(todo);
        } else {
            let todo = new toDo(title.value, prio.value, dateIn.value, list.value);
            defaultList(todo);
            createListTodo(list.value, todo);
            saveToStorage();
            addListsToSidebar();
            dispTodo(todo)
        };
        diaLog.close();
        formD.reset();
    });
};

function addList() {
    const addListBtn = document.querySelector(".add-list");
}

// call functions
addListsToSidebar();
displaySavedTodos();

addTodo();