import { saveToStorage } from "../index.js";

let lists = JSON.parse(localStorage.getItem("lists")) || {};

class toDo{
    constructor(title, priority, dueDate, ...list) {
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
        this.list = list; 
    };
};

// let lists;
function createList(list, ...todo) {
    if (!lists[list]) {
        lists[list] = [];
    };
    lists[list].push(todo);
    saveToStorage();
};

function defaultList(todo) {
    if (!lists["All Tasks"]) {
        lists["All Tasks"] = [];
    };
    lists["All Tasks"].push(todo);
    saveToStorage();
};

export { toDo, lists, createList, defaultList };