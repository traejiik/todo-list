import homeImgSrc from "./assets/images/home-rice.jpg";
import { menuPage } from "./menu.js";

function homePage() {
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("container");

    // hero section
    const hero = document.createElement("div");
    hero.classList.add("hero");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Traejiik's African Cuisine";

    hero.appendChild(title);


    // second section
    const about = document.createElement("div");
    about.classList.add("about");
    
    const subAbout1 = document.createElement("div");
    subAbout1.classList.add("about-text");
    const subAbout2 = document.createElement("div");
    subAbout2.classList.add("about-img");

    // about text
    const aboutTitle = document.createElement("h3");
    aboutTitle.textContent = "Hi there!";
    const aboutText = document.createElement("p");
    aboutText.textContent = "The right place to indulge in the flavours of african cooking. Come sit in or order online!";
    const order = document.createElement("button");
    order.textContent = "Order Now";
    order.classList.add("order-button");

    subAbout1.appendChild(aboutTitle);
    subAbout1.appendChild(aboutText);
    subAbout1.appendChild(order);

    // about img
    const abtImg = document.createElement("img");
    abtImg.src = homeImgSrc;

    subAbout2.appendChild(abtImg);


    // append elements
    about.appendChild(subAbout1);
    about.appendChild(subAbout2);

    homeContainer.appendChild(hero);
    homeContainer.appendChild(about);

    return homeContainer;
};

export { homePage };