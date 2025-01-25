let savedList = JSON.parse(localStorage.getItem("lists"));
if (savedList) {
    lists = savedList;
} else {
    lists = { "All Tasks": [] };
};

class toDo{
    constructor(title, priority, dueDate, ...list) {
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
        this.list = list; 
    };
};

// let lists;
function createListTodo(list, ...todo) {
    if (!lists[list]) {
        lists[list] = [];
    };
    lists[list].push(todo);
};

function newList(list) {
    lists[list] = [];
};

function defaultList(todo) {
    lists["All Tasks"].push(todo);
};

export { toDo, lists, createListTodo, newList, defaultList };