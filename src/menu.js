import ghJR from "./assets/images/gh-jlf-rice.jpg";
import sChY from "./assets/images/s-chicken-yassa.jpg";
import nChS from "./assets/images/n-chicken-soup.jpg";
import sSaT from "./assets/images/sosatie-sa.jpg";
import zmGn from "./assets/images/zim-gango.jpg";
import dKgb from "./assets/images/dikgobe-img.jpg";
import kCh from "./assets/images/kachumbari.jpg";
import chP from "./assets/images/chapati-img.jpg";
import eBtb from "./assets/images/ethiopian-beef.jpg";

function menuPage() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("container");

    // menu objects
    const westMenu = [
        {
            img: ghJR,
            name: "Ghanian Jollof Rice",
            desc: "Ghanaian Jollof Rice is a savory and spicy rice dish cooked in a seasoned tomato base with local spices that give off distinct West African flavors and aroma.",
            price: "$8"
        },
        {
            img: sChY,
            name: "Senegalese Chicken Yassa",
            desc: "Yassa is one of Senegal's favourite dishes",
            price: "$10"
        },
        {
            img: nChS,
            name: "Nkaakra Chicken Soup",
            desc: "Wholesome and warming, the go-to dish on chilly winter days to stave off cold symptoms",
            price: "$12"
        }];

    const southMenu = [
        {
            img: sSaT,
            name: "South African Sosatie",
            desc: "A traditional South African dish of mutton cooked on skewers",
            price: "$7",
        },
        {
            img: zmGn,
            name: "Zimbabwean Gango",
            desc: "A mashup of meat and veggies in one plate",
            price: "$9",
        },
        {
            img: dKgb,
            name: "Dikgobe",
            desc: "Samp and beans cooked together",
            price: "$5",
        }];

    const eastMenu = [
        {
            img: kCh,
            name: "Kachumbari",
            desc: "A fresh tomato and onion salad relish",
            price: "$5",
        },
        {
            img: chP,
            name: "Chapati",
            desc: "Made using a soft dough comprising wheat flour and water. Comes with a side of beef or chicken stew",
            price: "$8",
        },
        {
            img: eBtb,
            name: "Ethiopian Beef Tibs",
            desc: "an Ethiopian version of fajitas,  seasoned with berbere spice and spicy awaze paste and served with injera bread for a filling and tasty African supper.",
            price: "$10",
        }];

    // west section
    const westF = document.createElement("section");
    const westTitle = document.createElement("h2");
    westTitle.textContent = "West African Menu";
    const westList = document.createElement("ul");
    for (const meal of westMenu) {
        const menuItm = document.createElement("li");

        const img = document.createElement("img");
        img.src = meal.img;

        const textCtn = document.createElement("div");
        const title = document. createElement("h3");
        title.textContent = meal.name;
        const desc = document.createElement("p");
        desc.textContent = meal.desc;
        const prc = document.createElement("p");
        prc.textContent = meal.price;

        textCtn.appendChild(title);
        textCtn.appendChild(desc);
        textCtn.appendChild(prc);

        menuItm.appendChild(img);
        menuItm.appendChild(textCtn);

        westList.appendChild(menuItm);
    }

    // south section
    const southF = document.createElement("section");
    const southTitle = document.createElement("h2");
    southTitle.textContent = "Southern African Menu";
    const southList = document.createElement("ul");
    for (const meal of southMenu) {
        const menuItm = document.createElement("li");

        const img = document.createElement("img");
        img.src = meal.img;

        const textCtn = document.createElement("div");
        const title = document. createElement("h3");
        title.textContent = meal.name;
        const desc = document.createElement("p");
        desc.textContent = meal.desc;
        const prc = document.createElement("p");
        prc.textContent = meal.price;

        textCtn.appendChild(title);
        textCtn.appendChild(desc);
        textCtn.appendChild(prc);

        menuItm.appendChild(img);
        menuItm.appendChild(textCtn);

        southList.appendChild(menuItm);
    }

    // east section
    const eastF = document.createElement("section");
    const eastTitle = document.createElement("h2");
    eastTitle.textContent = "East African Menu";
    const eastList = document.createElement("ul");
    for (const meal of eastMenu) {
        const menuItm = document.createElement("li");

        const img = document.createElement("img");
        img.src = meal.img;

        const textCtn = document.createElement("div");
        const title = document. createElement("h3");
        title.textContent = meal.name;
        const desc = document.createElement("p");
        desc.textContent = meal.desc;
        const prc = document.createElement("p");
        prc.textContent = meal.price;

        textCtn.appendChild(title);
        textCtn.appendChild(desc);
        textCtn.appendChild(prc);

        menuItm.appendChild(img);
        menuItm.appendChild(textCtn);

        eastList.appendChild(menuItm);
    }

    // appending
        // to west
    westF.appendChild(westTitle);
    westF.appendChild(westList);

        // to south
    southF.appendChild(southTitle);
    southF.appendChild(southList);

        // to east
    eastF.appendChild(eastTitle);
    eastF.appendChild(eastList);

        // to container
    menuContainer.appendChild(westF);
    menuContainer.appendChild(southF);
    menuContainer.appendChild(eastF);

    return menuContainer;
}

export { menuPage };