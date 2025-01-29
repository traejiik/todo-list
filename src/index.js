import "./styles.css";
import { toDo, lists, newList, listHandler } from "./modules/todo.js";
import { addListsToSidebar, initLoad, loadList } from "./modules/dom.js";
import { deleteTodo, deleteList } from "./modules/manip.js";

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
            listHandler(todo);
            updateUI("All ToDos");
        } else {
            let todo = new toDo(title.value, prio.value, dateIn.value, list.value);
            listHandler(todo, list.value);
            updateUI(list.value);
        };
        diaLog.close();
        formD.reset();
    });
};

function addList() {
    const addlistFrm = document.querySelector(".input-list");
    const addListBtn = document.querySelector(".add-list");
    const listInp = document.getElementById("create-list");
    const crtListBtn = document.querySelector(".create-list");
    const closeListBtn = document.querySelector(".close-list");

    addListBtn.addEventListener("click", () => {
        addlistFrm.style.display = "flex";
        listInp.focus();
    });

    closeListBtn.addEventListener("click", (event) => {
        event.preventDefault();
        addlistFrm.style.display = "none";
    });

    crtListBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if (listInp.value === "") {
            alert("Please enter a list name");
        } else {
            newList(listInp.value);
            addlistFrm.style.display = "none";
            updateUI(listInp.value);
        };
    });
};

function viewList() {
    const listEl = document.querySelectorAll(".list-tag");

    listEl.forEach(item => {
        item.addEventListener("click", () => {
            const listTitle = item.dataset.list;
            updateUI(listTitle);
        })
    });
};

function remTodo() {
    const del = document.querySelectorAll(".delete-btn");
    const currView = document.querySelector(".header-title").textContent;
    del.forEach(buttons => {
        buttons.addEventListener("click", () => {
            const todoTitle = buttons.dataset.title;
            const todoToDelete = Object.values(lists)
                .flat()
                .find(todo => todo.title === todoTitle);
            deleteTodo(todoToDelete);
            updateUI(currView);
        });
    });
};

function remList() {
    const del = document.querySelectorAll(".ldelete-btn");

    del.forEach(buttons => {
        buttons.addEventListener("click", (event) => {
            event.stopPropagation();
            const listTitle = buttons.dataset.list;
            deleteList(listTitle);

            if (!lists[listTitle]) {
                updateUI("All Todos");
            };
        });
    });
};

function updateUI(item) {
    addListsToSidebar();
    remTodo();
    remList();
    viewList();
    const validList = lists[item] ? item : "All ToDos";
    loadList(validList);
};

function pageLoad() {
    // initial load
    addListsToSidebar();
    initLoad();
    // functionality calls
    addTodo();
    addList();
    remTodo();
    remList();
    viewList();
};

pageLoad();

export { saveToStorage };