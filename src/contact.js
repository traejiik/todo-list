function contactPage() {
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("container");
    
    const formCtn = document.createElement("div");
    formCtn.classList.add("formCtn");
    const formTitle = document.createElement("h3");
    formTitle.textContent = "Contact Us";

    // form
    const form = document.createElement("form");

    const fNameL = document.createElement("label");
    fNameL.for = "name"
    fNameL.textContent = "Name:";
    const fName = document.createElement("input");
    fName.id = "name";
    fName.type = "text";
    fName.name = "name";

    const fEmailL = document.createElement("label");
    fEmailL.for = "email";
    fEmailL.textContent = "Email:";
    const fEmail = document.createElement("input");
    fEmail.id = "email";
    fEmail.type = "email";
    fEmail.name = "email";

    const fMessageL = document.createElement("label");
    fMessageL.for = "mess";
    fMessageL.textContent = "Message:";
    const fMessage = document.createElement("textarea");
    fMessage.id = "mess";
    fMessage.name = "mess";
    fMessage.required = true;

    const fBtn = document.createElement("button");
    fBtn.textContent = "Submit";
    fBtn.type = "submit";
    fBtn.id = "form-btn";

    // appending
    form.appendChild(fNameL);
    form.appendChild(fName);
    form.appendChild(fEmailL);
    form.appendChild(fEmail);
    form.appendChild(fMessageL);
    form.appendChild(fMessage);
    form.appendChild(fBtn);

    formCtn.appendChild(formTitle);
    formCtn.appendChild(form);

    contactContainer.appendChild(formCtn);

    return contactContainer;
}

export { contactPage }