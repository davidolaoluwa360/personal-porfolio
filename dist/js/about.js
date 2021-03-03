"use strict";

export function viewAboutComponent(){
    const aboutContainer = document.createElement("div");
    aboutContainer.setAttribute("class", "about-container");

    const about = `
        <div class="about-main-wrapper">
            <div class="about-main-header">
                <div class="about-header-title">
                    <h2>About</h2>
                </div>
            </div>

            <div class="about-main-body">
                <h2>About</h2>
                <div class="about-body-descrip-wrapper">
                    <div class="left-descrip">
                        
                    </div>
                    <div class="right-descrip">
                        <img class="img-fluid" src="./img/Atebisun_David.jpg" alt="atebisun-david-profile"/>
                    </div>
                </div>
                
            </div>
        </div>
    `;

    aboutContainer.innerHTML = `${about}`;
    const mainContent = document.querySelector(".content-wrapper");
    mainContent.appendChild(aboutContainer);
}