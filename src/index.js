import "./styles.css";
import { toDo, lists, createList } from "./modules/todo.js";

// import svgs
import prioIcon from "./assets/icons/exclam.svg";
import listIcon from "./assets/icons/pound.svg";

// Local Storage
let savedLists = localStorage.getItem("lists");
if (savedLists) {
    lists = JSON.parse(savedLists);
} else {
    lists = {};
}

function saveToStorage() {
    localStorage.setItem("lists", JSON.stringify(lists));
};

// Functionality
