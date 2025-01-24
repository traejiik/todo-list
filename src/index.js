import "./styles.css";
import { toDo, lists, createList } from "./modules/todo.js";

// import svgs
import addIcon from "./assets/icons/add.svg";
import logoIcon from "./assets/icons/logo.svg";
import prioIcon from "./assets/icons/exclam.svg";
import todayIcon from "./assets/icons/today.svg";
import listIcon from "./assets/icons/pound.svg";

let savedLists = localStorage.getItem("lists");
if (savedLists) {
    lists = JSON.parse(savedLists);
} else {
    lists = {};
}

function saveToStorage() {
    localStorage.setItem("lists", JSON.stringify(lists));
};