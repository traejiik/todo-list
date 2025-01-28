import { lists } from "./todo.js";
import { saveToStorage } from "../index.js";

function deleteTodo(todo) {
    Object.keys(lists).forEach(listName => {
        lists[listName] = lists[listName].filter(existingTodo => existingTodo.title !== todo.title);
    });

    saveToStorage();
};

function deleteList(listName) {
    const listItems = lists[listName];
    const todosToRemove = listItems.map(todo => todo.title);

    lists["All ToDos"] = lists["All ToDos"].filter(
        todo => !todosToRemove.includes(todo.title)
    );
    delete lists[listName];

    saveToStorage();
};

export { deleteTodo, deleteList };