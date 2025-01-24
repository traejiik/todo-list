class toDo {
    constructor(title, priority, dueDate, list) {
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
        this.list = list; 
    };
};

let lists;
function createList(list, ...todo) {
    if (list in lists) {
        lists[list].push(todo[0]);
    } else {
        lists[list] = [todo[0]];
    };
};

function defaultList(todo) {
    let allTask = [];
    allTask.push(todo);
    lists.push(allTask);
};

export { toDo, lists, createList, defaultList };