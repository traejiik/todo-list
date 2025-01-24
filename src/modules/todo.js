class toDo {
    constructor(title, desc, priority, dueDate, checkStatus, project) {
        this.title = title;
        this.desc = desc;
        this.priority = priority;
        this.dueDate = dueDate;
        this.checkStatus = checkStatus;
        this.list = project; 
    };
};

let lists;
function createList(list, todo) {
    if (list in lists) {
        lists[list].push(todo);
    } else {
        lists[list] = [todo];
    };
};

export { toDo, lists, createList };