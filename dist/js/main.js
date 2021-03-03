"use strict";
import {homeViewComponenet} from "./home.js";
import {viewAboutComponent} from "./about.js";
import {viewContactComponent} from "./contact.js";
import {viewProjectComponent} from "./project.js";


const listGroupToggle = document.querySelectorAll(".list-group-item");
const contentContainer = document.querySelector(".content-wrapper");


homeViewComponenet();

function removeOldElement(){
    const oldContent = contentContainer.querySelectorAll("div");
    if(oldContent){
        oldContent.forEach(elem => {
            elem.remove();
        });
    }
}

function toggleActive(currentPage){
    listGroupToggle.forEach(elem => {
        if(elem.classList.contains){
            elem.classList.remove("active");
        }
    });

    listGroupToggle[currentPage].classList.add("active");
}

export function home(){
    removeOldElement();
    toggleActive(0);
    homeViewComponenet();
}
listGroupToggle[0].addEventListener("click", () => {
    home();
});

export function about(){
    removeOldElement();
    toggleActive(1);
    viewAboutComponent();
}
listGroupToggle[1].addEventListener("click", () => {
    about();
});

export function project(){
    removeOldElement();
    toggleActive(2);
    viewProjectComponent();
}
listGroupToggle[2].addEventListener("click", () => {
    removeOldElement();
    project();
})

export function contact(){
    removeOldElement();
    toggleActive(3);
    viewContactComponent();
}
listGroupToggle[3].addEventListener("click", () => {
    contact();
});



