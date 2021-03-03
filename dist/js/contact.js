"use strict";

export function viewContactComponent(){
    const contactContainer = document.createElement("div");
    contactContainer.setAttribute("class", "contact-container");

    const contact = `
        <div class="contact-main-wrapper">
            <div class="contact-main-header">
                <div class="contact-main-title">
                    <h2>Contact</h2>
                </div>
            </div>

            <div class="contact-main-body">
                <h2>Let's chat!</h2>

                <p>Want to get in touch? Whether you're interested in working on a project together or just want to say hello, feel free to email me at <a href="mail:davidolaoluwa240@gmail.com">davidolaoluwa240@gmail.com</a> and I'll get back to you as soon as I can!</p>
                <p>You can also check out my social links in the footer of the sidebar to get in touch that way.</p>
            </div>
        </div>
    `;
    contactContainer.innerHTML = `${contact}`;

    const mainContent = document.querySelector(".content-wrapper");
    mainContent.appendChild(contactContainer);
}