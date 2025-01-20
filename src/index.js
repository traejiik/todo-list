import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";
import "./styles.css";

const container = document.getElementById("content");
container.appendChild(homePage());

function eventListeners() {
    const homeBtn = document.querySelector(".home");
    const menuBtn = document.querySelector(".menu");
    const contactBtn = document.querySelector(".contact");
    const buttons = document.querySelectorAll(".header-buttons");

    homeBtn.addEventListener('click', () => {
        container.innerHTML = "";
        container.appendChild(homePage());
    });
    
    menuBtn.addEventListener('click', () => {
        container.innerHTML = "";
        container.appendChild(menuPage());
    });
    
    contactBtn.addEventListener('click', () => {
        container.innerHTML = "";
        container.appendChild(contactPage());
    });
};

eventListeners();