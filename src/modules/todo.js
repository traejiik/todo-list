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
        this.checkStatus = false;
    };
};

// lists
function newList(list) {
    lists[list] = [];
    saveToStorage();
};

function listHandler(todo, list = null) {
    lists["All ToDos"].push(todo);
    if (list) {
        if (!lists[list]) {
            lists[list] = [];
        };
        lists[list].push(todo);
    };
    saveToStorage();
};

export { toDo, lists, newList, listHandler };