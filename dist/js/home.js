"use strict";
import {about} from "./main.js";

export function homeViewComponenet(){
    const homeContainer = document.createElement("div");
    homeContainer.setAttribute("class", "home-container");
    const home =  `
        <div class="home-main">
            <h1 class="home-text-heading text-center">HELLO!</h1>
            <p class="home-text-content text-center">
                My name is Atebisun David,
                and I'm a Full stack web developer
                working remotely out of Lagos, 
                Nigeria!
            </p>
            <p class="home-info">
                <span class="text-center more-about-me">More About Me</span>
            </p>
        </div>
    `;
    homeContainer.innerHTML = `${home}`;

    homeContainer.querySelector(".more-about-me").addEventListener("click", about);

    const mainContent = document.querySelector(".content-wrapper");
    mainContent.appendChild(homeContainer);
}