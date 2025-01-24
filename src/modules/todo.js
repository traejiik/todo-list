let lists = JSON.parse(localStorage.getItem("lists")) || {};

class toDo{
    constructor(title, priority, dueDate, list) {
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
};

function defaultList(todo) {
    let allTask = [];
    allTask.push(todo);
    lists.push(allTask);
};

export { toDo, lists, createList, defaultList };