import { lists } from "./todo.js";
import { saveToStorage } from "../index.js";

function deleteTodo(todo) {
    Object.keys(lists).forEach(listName => {
        lists[listName] = lists[listName].filter(existingTodo => existingTodo.title !== todo.title);
    });

    saveToStorage();
};

function deleteList(listName) {
    if (listName in lists) {
        const todosToRemove = lists[listName].map(todo => todo.title);

        lists["All Tasks"] = lists["All Tasks"].filter(
            todo => !todosToRemove.includes(todo.title)
        );

        delete lists[listName];
    };

    saveToStorage();
};

export { deleteTodo, deleteList };