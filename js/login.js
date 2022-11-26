// Mudar o login para pessoa fisica ou juridica
const main_input = document.getElementById("main-input");

// Pessoa fisica
const person_fisica = document.getElementsByClassName("fisica")[0];

person_fisica.onclick = () => {
    person_fisica.classList.add("active");
    person_juridica.classList.remove("active");
    main_input.placeholder = " CPF";
}

// Pessoa juridica
const person_juridica = document.getElementsByClassName("juridica")[0];

person_juridica.onclick = () => {
    person_juridica.classList.add("active");
    person_fisica.classList.remove("active");
    main_input.placeholder = " CNPJ";
}


