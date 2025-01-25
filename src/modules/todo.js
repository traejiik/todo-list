import { saveToStorage } from "../index.js";

let savedList = JSON.parse(localStorage.getItem("lists"));
let lists;
if (savedList) {
    lists = savedList;
} else {
    lists = { "All ToDos": [] };
};

// to-do class
class toDo{
    constructor(title, priority, dueDate) {
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
    };
};

// lists
function createListTodo(list, todo) {
    if (!lists[list]) {
        lists[list] = [];
    };
    lists[list].push(todo);
    saveToStorage();
};

function newList(list) {
    lists[list] = [];
    saveToStorage();
};

function defaultList(todo) {
    lists["All ToDos"].push(todo);
    saveToStorage();
};

export { toDo, lists, createListTodo, newList, defaultList };